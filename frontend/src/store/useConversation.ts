import { create } from "zustand";
import { IConversationState } from "../models/IConversation";

const useConversation = create<IConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) =>
        set({ selectedConversation: conversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
