import { registerUser, loginUser } from "../services/auth.service.js";
import { validationResult } from "express-validator";

// ✅ REGISTER
export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    const user = await registerUser(name, email, password);

    res.json({
      message: "User registered",
      user,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// ✅ LOGIN (THIS IS WHAT WAS MISSING / WRONG)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    res.json({
      message: "Login successful",
      ...data,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};