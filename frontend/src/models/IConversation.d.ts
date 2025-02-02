export interface IConversation {
    id: number;
    fullName: string;
    profilePicture: string;
    emoji: string;
}

export interface IMessage {
    id: number;
    fromMe: boolean;
    body: string;
}
