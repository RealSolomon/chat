import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";

import dotenv from "dotenv";
import { app, server } from "./socket/socket";
dotenv.config();

const PORT = process.env.PORT || 3300;

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});

// TODO add socket.io for server and configure this for the deployment
