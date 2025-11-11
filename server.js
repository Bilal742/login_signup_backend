import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/", router);

export default app;
