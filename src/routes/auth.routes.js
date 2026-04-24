import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { body } from "express-validator";

const router = express.Router();
router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  register
);
router.post("/login", login);

export default router;