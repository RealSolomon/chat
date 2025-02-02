import axios from "axios";
import { IAuthUser } from "../models/IAuth";
import { IFormInputs, ILoginFormInputs } from "../models/IForm";
import { ConversationType, MessageType } from "../models/IConversation";

const axiosInstance = axios.create();

export const getAuthUser = async () => {
    return (await axiosInstance.get<IAuthUser>("/api/auth/me")).data;
};

export const signUp = async (body: IFormInputs) => {
    return await axiosInstance.post("/api/auth/signup", body);
};

export const logout = async () => {
    return await axiosInstance.post("/api/auth/logout");
};

export const login = async (body: ILoginFormInputs) => {
    return await axiosInstance.post("/api/auth/login", body);
};

export const getConversations = async () => {
    return (
        await axiosInstance.get<ConversationType[]>(
            "/api/messages/conversations"
        )
    ).data;
};

export const getMessages = async (conversationId: string) => {
    return (
        await axiosInstance.get<MessageType[]>(
            `/api/messages/${conversationId}`
        )
    ).data;
};

export const sendMessage = async (conversationId: string, message: string) => {
    return (
        await axiosInstance.post(`/api/messages/send/${conversationId}`, {
            message,
        })
    ).data;
};
