import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(3300, () => {
    console.log("Server is running on 3300 port");
});
