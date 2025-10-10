import users from "../models/userModel.js";
import bcrypt from "bcryptjs";

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ 1. Input validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Required fields are missing",
                status: false
            });
        }

        // ✅ 2. Check existing user
        const existingUser = await users.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({
                message: "User not found",
                status: false
            });
        }

        // ✅ 3. Compare password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid password",
                status: false
            });
        }

        // ✅ 4. Send success response
        return res.status(200).json({
            message: "User login successfully",
            status: true
        });

    } catch (error) {
        return res.status(500).json({
            message: "User error during login",
            error: error.message,
            status: false
        });
    }
};

export default loginUser;
