import fs from "fs";
import projectModel from "../models/projectModel.js";

const addProject = async (req, res, publicUrl) => {
  const project = new projectModel({
    name: req.body.name,
    description: req.body.description,
    image: publicUrl,
  });

  try {
    await project.save();
    res.json({ success: true, message: "Project Added" });
  } catch (error) {
    console.error("Error saving project:", error); // Log detailed error
    res.status(500).json({
      success: false,
      message: "Error saving project",
      error: error.message, // Send error message in response
    });
  }
};


const listProject = async (req, res) => {
  try {
    const projects = await projectModel.find({});
    res.json({ success: true, data: projects });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeProject = async (req, res) => {
  try {
    const project = await projectModel.findById(req.body.id);

    if (!project) {
      return res.json({ success: false, message: "Project not found" });
    }

    if (project.image) {
      // Check if the image is on Firebase or locally and delete accordingly
      if (project.image.startsWith("https://firebasestorage.googleapis.com")) {
        // If the image is on Firebase, you should delete it from Firebase storage
        const fileName = project.image.split("/").pop().split("?")[0];
        await bucket.file(fileName).delete(); // Assuming `bucket` is your Firebase storage reference
      } else {
        // If the image is stored locally, use fs.unlink
        const fileName = project.image.split("/").pop();
        const imagePath = `public/images/${fileName}`;
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.log("Error deleting image:", err);
            return res.json({
              success: false,
              message: "Error deleting image",
            });
          }
        });
      }
    }

    await projectModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Project Removed" });
  } catch (error) {
    console.log("Error removing project:", error);
    res.json({
      success: false,
      message: "Error removing project",
      error: error.message,
    });
  }
};



const editProject = async (req, res) => {
  const { id, name, description, image } = req.body;

  try {
    const project = await projectModel.findById(id);

    if (!project) {
      return res.json({ success: false, message: "Project not found" });
    }

    // Update the project details
    project.name = name || project.name;
    project.description = description || project.description;
    project.image = image || project.image;

    await project.save();
    res.json({ success: true, message: "Project Updated" });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({
      success: false,
      message: "Error updating project",
      error: error.message,
    });
  }
};


export { addProject, listProject, removeProject, editProject };