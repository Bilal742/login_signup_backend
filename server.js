import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// ✅ Connect MongoDB
connectDB();

// ✅ Routes
app.use("/", router);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("✅ Server is running...");
});

// ✅ Listen (ONLY FOR RAILWAY / RENDER)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

