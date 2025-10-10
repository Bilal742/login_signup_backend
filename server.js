import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"; // 👈 import cors
import router from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors()); // 👈 enable CORS for all origins

// ✅ MongoDB Connection
connectDB();

// ✅ Routes
app.use("/api/users", router);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ Server is running...");
});

// ✅ Port Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
