import express from "express";
import multer from "multer";
import {
  addProject,
  listProject,
  removeProject,
} from "../controllers/projectController.js";
import { bucket } from "../firebase/firebase.js";

const projectRouter = express.Router();

const storage = multer.memoryStorage(); // Use memory storage for uploading to Firebase
const upload = multer({ storage: storage });

projectRouter.post("/add", upload.single("image"), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const fileName = `${Date.now()}-${file.originalname}`;
  const blob = bucket.file(fileName);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  blobStream.on("error", (err) => {
    res.status(500).send("Error uploading file.");
  });

  blobStream.on("finish", async () => {
    try {
      await blob.makePublic();
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/virtus-interior.appspot.com/${bucket.name}/${fileName}`;
      await addProject(req, res, publicUrl); // Pass the public URL to your controller
    } catch (error) {
      res.status(500).send("Error making file public.");
    }
  });

  blobStream.end(file.buffer);
});

projectRouter.get("/list", listProject);
projectRouter.post("/remove", removeProject);

export default projectRouter;
