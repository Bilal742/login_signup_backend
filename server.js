import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import router from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Connect DB
await connectDB();

app.use("/", router);

// Vercel ke liye port listen nahi hota
export default app;
