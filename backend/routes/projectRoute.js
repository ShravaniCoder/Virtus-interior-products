import express from "express";
import multer from "multer";
import {
  addProject,
  listProject,
  removeProject,
  editProject, // Import the editProject controller
} from "../controllers/projectController.js";
import { bucket } from "../firebase/firebase.js";

const projectRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Add project route
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
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURIComponent(fileName)}?alt=media`;
      await addProject(req, res, publicUrl);
    } catch (error) {
      res.status(500).send("Error making file public.");
    }
  });

  blobStream.end(file.buffer);
});

// List projects route
projectRouter.get("/list", listProject);

// Remove project route
projectRouter.post("/remove", removeProject);

// Edit project route
projectRouter.post("/edit", upload.single("image"), async (req, res) => {
  const file = req.file;
  let publicUrl = null;

  if (file) {
    const fileName = `${Date.now()}-${file.originalname}`;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on("error", (err) => {
      return res.status(500).send("Error uploading file.");
    });

    blobStream.on("finish", async () => {
      try {
        await blob.makePublic();
        publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(fileName)}?alt=media`;
        await editProject(req, res, publicUrl); // Pass publicUrl to editProject if there's a new file
      } catch (error) {
        return res.status(500).send("Error making file public.");
      }
    });

    blobStream.end(file.buffer);
  } else {
    // If no new file is uploaded, proceed with just updating the name/description
    await editProject(req, res, null); // No new image
  }
});

export default projectRouter;
