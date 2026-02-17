import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import tripRoutes from "./routes/trips.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
