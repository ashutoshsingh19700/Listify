import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import businessRoutes from "./routes/business.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { protect } from "./middlewares/auth.middleware.js";







const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/business", businessRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/review", reviewRoutes);
app.use(errorHandler);
app.use("/api/review", reviewRoutes);


export default app;