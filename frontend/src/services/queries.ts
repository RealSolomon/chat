import { useQuery } from "@tanstack/react-query";
import { getAuthUser, getConversations, getMessages } from "./api";

export const useAuthUser = () => {
    return useQuery({
        queryKey: ["authUser"],
        queryFn: getAuthUser,
        refetchOnWindowFocus: false,
    });
};

export const useConversations = () => {
    return useQuery({
        queryKey: ["conversations"],
        queryFn: getConversations,
        refetchOnWindowFocus: false,
    });
};

export const useMessages = (conversationId: string) => {
    return useQuery({
        queryKey: ["messages", conversationId],
        queryFn: () => getMessages(conversationId),
        enabled: !!conversationId,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
    });
};
