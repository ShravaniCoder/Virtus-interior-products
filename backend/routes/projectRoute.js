import express from "express";
import multer from "multer";
import {
  addProject,
  listProject,
  removeProject,
  editProject,
} from "../controllers/projectController.js";
import { bucket } from "../firebase/firebase.js";
const projectRouter = express.Router();
import path from 'path';

// Set up the destination and filename for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Ensure the file has a unique name
  },
});

const upload = multer({ storage: storage });

// Use upload.single('image') to handle image uploads


// Helper function for uploading files to Firebase
const uploadFileToFirebase = async (file) => {
  return new Promise((resolve, reject) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      metadata: { contentType: file.mimetype },
    });

    blobStream.on("error", (err) => {
      console.error("Blob Stream Error:", err);
      reject(err); // Reject the promise if there's an error
    });

    blobStream.on("finish", async () => {
      try {
        await blob.makePublic();
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURIComponent(fileName)}?alt=media`;
        resolve(publicUrl); // Resolve with the file's public URL
      } catch (error) {
        console.error("Error making file public:", error);
        reject(error);
      }
    });

    blobStream.end(file.buffer); // End the stream after sending the file buffer
  });
};




// Add project route
projectRouter.post("/add", upload.single("image"), async (req, res) => {
  console.log("Received file:", req.file); // Log the uploaded file
  console.log("Form data:", req.body); // Log other form fields like name and description

  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // Process the file
    const publicUrl = await uploadFileToFirebase(req.file);
    await addProject(req, res, publicUrl);
  } catch (error) {
    console.error("Error in /add route:", error);
    res.status(500).send("Internal Server Error.");
  }
});




// Edit project route
projectRouter.post("/edit", upload.single("image"), async (req, res) => {
  try {
    let publicUrl = null;
    if (req.file) {
      // Upload new file and get public URL
      publicUrl = await uploadFileToFirebase(req.file);
    }

    // Call editProject with the public URL of the uploaded file (if any)
    await editProject(req, res, publicUrl);
  } catch (error) {
    console.error("Error in /edit route:", error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error.",
      error: error.message,
    });
  }
});

// List projects route
projectRouter.get("/list", listProject);

// Remove project route
projectRouter.post("/remove", removeProject);

export default projectRouter;
