import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3300;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});

// TODO add socket.io for server and configure this for the deployment
