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


// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Serve static files from the 'public/images' directory
app.use("/images", express.static(path.join(__dirname, "public/images")));

// API Endpoint
app.use("/api/project", projectRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port,  () => {
  console.log(`Server started on http://localhost:${port}`);
});

projectRouter.get("/test", (req, res) => {
  res.status(200).send("Server is working");
});


