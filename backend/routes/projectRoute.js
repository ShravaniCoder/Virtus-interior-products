import express from "express";
import multer from "multer";
import {
  addProject,
  listProject,
  removeProject,
} from "../controllers/projectController.js";
import { bucket } from "../firebase/firebase.js"; // Import the initialized bucket

const projectRouter = express.Router();

const storage = multer.memoryStorage(); // Store the image in memory temporarily
const upload = multer({ storage: storage });

projectRouter.post("/add", upload.single("image"), async (req, res) => {
  const file = req.file;
  const blob = bucket.file(`${Date.now()}-${file.originalname}`);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  blobStream.on("error", (err) => {
    console.error(err);
    res.status(500).send("Error uploading file");
  });

  blobStream.on("finish", async () => {
    // The public URL of the image
    const publicUrl = `gs://virtus-interior.appspot.com/${bucket.name}/${blob.name}`;

    // Call your addProject function with the public URL
    await addProject(req, res, publicUrl);
  });

  blobStream.end(file.buffer);
});

projectRouter.get("/list", listProject);
projectRouter.post("/remove", removeProject);

export default projectRouter;
