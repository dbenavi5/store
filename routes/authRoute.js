import express from "express";
import {
  blockUser,
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  loginController,
  unblockUser,
  updateUser,
} from "../controller/userCtrl.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginController);
router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getOneUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

export default router;
