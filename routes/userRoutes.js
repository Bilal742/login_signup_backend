import express from "express";
import signupController from "../controllers/signupController.js";
import loginUser from "../controllers/loginController.js";


const router = express.Router();

router.post("/Signup", signupController);
router.post("/login", loginUser);



export default router
