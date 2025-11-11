import express from "express";
import loginUser from "../controllers/loginController.js";
import signupUser from "../controllers/signupController.js";



const router = express.Router();

router.post("/api/signup", signupUser);
router.post("/api/login", loginUser);


export default router;