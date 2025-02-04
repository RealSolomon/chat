export type ConversationType = {
    id: string;
    fullName: string;
    profilePicture: string;
};

export type MessageType = {
    id: string;
    body: string;
    senderId: string;
    createdAt: string;
    shouldShake?: boolean;
};

export interface IConversationState {
    selectedConversation: ConversationType | null;
    messages: MessageType[];
    setSelectedConversation: (conversation: ConversationType | null) => void;
    setMessages: (messages: MessageType[]) => void;
}
