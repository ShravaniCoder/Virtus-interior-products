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
  try {
    // Check if a file was uploaded
    const file = req.file;
    if (!file) {
      console.error("No file uploaded.");
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    }

    // Generate a unique file name
    const fileName = `${Date.now()}-${file.originalname}`;
    const blob = bucket.file(fileName);

    // Start the upload process
    const blobStream = blob.createWriteStream({
      metadata: { contentType: file.mimetype },
    });

    blobStream.on("error", (err) => {
      console.error("Error uploading file:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error uploading file." });
    });

    blobStream.on("finish", async () => {
      try {
        // Make the file public
        await blob.makePublic();
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(fileName)}?alt=media`;

        console.log("File uploaded successfully:", publicUrl);

        // Call your project saving logic
        await addProject(req, res, publicUrl); // Ensure this function handles errors internally
      } catch (error) {
        console.error("Error making file public:", error);
        return res
          .status(500)
          .json({ success: false, message: "Error making file public." });
      }
    });

    blobStream.end(file.buffer);
  } catch (error) {
    console.error("Unexpected server error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal error" });
  }
});


projectRouter.get("/list", listProject);
projectRouter.post("/remove", removeProject);

export default projectRouter;
