
import fs from "fs";
import projectModel from "../models/projectModel.js";

const addProject = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const project = new projectModel({
        name: req.body.name,
        description: req.body.description,
        image: image_filename,
    })
    try {
        await project.save();
        res.json({success: true, message: "Project Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// add project
const listProject = async (req, res) => {
    try {
        const projects = await projectModel.find({});
        res.json({success:true,data:projects})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove project
const removeProject = async (req, res) => {
    try {
        const food = await projectModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await projectModel.findByIdAndDelete(req.body.id);

        res.json({success:true, message: "Project Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export { addProject, listProject, removeProject };