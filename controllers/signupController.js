import users from "../models/userModel.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // ✅ 1. Input validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Required fields are missing",
                status: false
            });
        }

        // ✅ 2. Check existing user
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                status: false
            });
        }

        // ✅ 3. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ 4. Create new user
        const userObj = new users({
            name,
            email,
            password: hashedPassword,
        });

        // ✅ 5. Save to database
        await userObj.save();

        // ✅ 6. Send success response
        res.status(201).json({
            message: "User signup successfully",
            status: true
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
            status: false
        });
    }
};

export default registerUser;
