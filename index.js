import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders",orderRouter)

app.listen(8080, () => {
  mongoose.connect(`${MONGO_URI}`);
  console.log("Server StartedD");
});