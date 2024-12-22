import express from "express";
import cors from "cors";
import projectRouter from "./routes/projectRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Middleware
app.use(cors());

// DB connection
connectDB();

// Serve static files from the 'public/images' directory
app.use("/images", express.static(path.join(__dirname, "public/images")));

// API Endpoint
app.use("/api/project", projectRouter);

// Test Route
projectRouter.get("/test", (req, res) => {
  res.status(200).send("Server is working");
});

// Default route
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    success: false,
    message: "Something went wrong on the server.",
    error: err.message,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
