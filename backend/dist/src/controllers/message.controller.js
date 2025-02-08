"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversations = exports.getMessages = exports.sendMessage = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const socket_1 = require("../socket/socket");
const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user.id;
        let conversation = await prisma_1.default.conversation.findFirst({
            where: {
                particapantIds: {
                    hasEvery: [senderId, recieverId],
                },
            },
        });
        if (!conversation) {
            conversation = await prisma_1.default.conversation.create({
                data: {
                    particapantIds: {
                        set: [senderId, recieverId],
                    },
                },
            });
        }
        const newMessage = await prisma_1.default.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id,
            },
        });
        if (newMessage) {
            conversation = await prisma_1.default.conversation.update({
                where: {
                    id: conversation.id,
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id,
                        },
                    },
                },
            });
        }
        const recieverSocketId = (0, socket_1.getReceiverSocketId)(recieverId);
        if (recieverSocketId) {
            socket_1.io.to(recieverSocketId).emit("newMessage", newMessage);
        }
        res.status(201).json(newMessage);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.sendMessage = sendMessage;
const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user.id;
        const conversation = await prisma_1.default.conversation.findFirst({
            where: {
                particapantIds: {
                    hasEvery: [senderId, userToChatId],
                },
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc",
                    },
                },
            },
        });
        if (!conversation)
            return res.status(200).json([]);
        res.status(200).json(conversation.messages);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getMessages = getMessages;
const getConversations = async (req, res) => {
    try {
        const authUserId = req.user.id;
        const users = await prisma_1.default.user.findMany({
            where: {
                id: {
                    not: authUserId,
                },
            },
            select: {
                id: true,
                fullName: true,
                profilePicture: true,
            },
        });
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getConversations = getConversations;
