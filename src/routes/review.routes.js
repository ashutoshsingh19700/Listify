import express from "express";
import {
  createReview,
  getReviews,
} from "../controllers/review.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// 🔐 protected
router.post("/", protect, createReview);

// public
router.get("/:businessId", getReviews);

export default router;