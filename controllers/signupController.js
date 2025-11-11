import Users from "../models/userModel.js";
import bcrypt from "bcryptjs";

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Required fields are missing",
        status: false,
      });
    }

    // Check existing user
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        status: false,
      });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create new user
    const user = new Users({ name, email, password: hashed });
    await user.save();

    return res.status(201).json({
      message: "User signup successful",
      status: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
      status: false,
    });
  }
};

export default signupUser;
