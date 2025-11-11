import express from "express";
import loginUser from "../controllers/loginController.js";
import signupUser from "../controllers/signupController.js";



const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);


export default router;
