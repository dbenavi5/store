import express from "express";
import { createUser, loginController } from "../controller/userCtrl.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginController);

export default router;
