import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import cors from "cors"; 

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;
try {
  await mongoose.connect(URI);
  console.log("connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`)
});
