import mongoose from "mongoose"

const connectDB = () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB connected");

    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
    }

}

export default connectDB;