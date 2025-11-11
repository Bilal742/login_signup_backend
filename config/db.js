import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // Optional, good for vercel
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error.message);

    // ❌ DO NOT USE process.exit() IN VERCEL
    // Just return (do not crash server)
    return;
  }
};

export default connectDB;
