import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {type:String, required:true}
})

const projectModel = mongoose.models.project || mongoose.model("project", projectsSchema);

export default projectModel;