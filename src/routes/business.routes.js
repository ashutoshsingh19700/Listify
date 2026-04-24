import express from "express";
import {
  addBusiness,
  getBusinesses,
  getBusinessFullDetails,
} from "../controllers/business.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ✅ ROUTES ONLY (NO LOGIC HERE)
router.post("/", protect, addBusiness);
router.get("/", getBusinesses);
router.get("/:id", getBusinessFullDetails);

export default router;