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
   console.error("Blob stream error:", err); // Log detailed error to server console
   return res.status(500).send("Error uploading file: " + err.message);
 });


  blobStream.on("finish", async () => {
    try {
      await blob.makePublic();
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURIComponent(fileName)}?alt=media`;
      await addProject(req, res, publicUrl); // Ensure this function sends a response or logs an error

      // Send a response if addProject doesn't handle it internally
      res.status(200).send({
        message: "Project uploaded successfully",
        url: publicUrl,
      });
    } catch (error) {
      console.error("Error making file public:", error);
      return res.status(500).send("Error making file public: " + error.message);
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
      console.error("Blob stream error:", err);
      return res.status(500).send("Error uploading file: " + err.message);
    });

    blobStream.on("finish", async () => {
      try {
        await blob.makePublic();
        publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(fileName)}?alt=media`;
        await editProject(req, res, publicUrl); // Pass publicUrl to editProject if there's a new file

        // Send a response if editProject doesn't handle it internally
        res.status(200).send({
          message: "Project updated successfully",
          url: publicUrl,
        });
      } catch (error) {
        console.error("Error making file public:", error);
        return res
          .status(500)
          .send("Error making file public: " + error.message);
      }
    });

    blobStream.end(file.buffer);
  } else {
    // If no new file is uploaded, proceed with just updating the name/description
    try {
      await editProject(req, res, null); // No new image

      // Send a response if editProject doesn't handle it internally
      res.status(200).send({
        message: "Project updated successfully (no image change)",
      });
    } catch (error) {
      console.error("Error updating project without a new image:", error);
      return res.status(500).send("Error updating project: " + error.message);
    }
  }
});

export default projectRouter;
