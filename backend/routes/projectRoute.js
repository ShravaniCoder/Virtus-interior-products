import express from "express";
import { addProject, listProject, removeProject,  } from "../controllers/projectController.js";
import multer from "multer";

const projectRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file,cb) => {
       return cb(null,`${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage:storage})

projectRouter.post("/add", upload.single("image"), addProject )
projectRouter.get("/list", listProject)
projectRouter.post("/remove", removeProject)



export default projectRouter;