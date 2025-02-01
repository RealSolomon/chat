import express from "express";
import protectRoute from "../middleware/protectRoute";
import {
    getConversations,
    getMessages,
    sendMessage,
} from "../controllers/message.controller";

const router = express.Router();

router.get("/conversations", protectRoute, getConversations);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
