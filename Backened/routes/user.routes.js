import express from "express";
import {
  login,
  signup,
  logout,
  AllUsers,
} from "../controller/user.controller.js";
import  secureRoute from "../middleware/secureRoute.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", secureRoute, AllUsers);
export default router;
