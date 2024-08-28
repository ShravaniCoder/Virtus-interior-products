import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import projectRouter from "./routes/projectRoute.js";

const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// Api Endpoint
app.use("/api/project", projectRouter)
app.use("/images",express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://sureshmundargi:9820327499@cluster0.owwjq.mongodb.net/?