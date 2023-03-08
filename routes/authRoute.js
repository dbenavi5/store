import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  loginController,
  updateUser,
} from "../controller/userCtrl.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginController);
router.get("/all-users", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
