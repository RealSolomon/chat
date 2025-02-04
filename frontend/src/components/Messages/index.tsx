import { MutableRefObject, useEffect } from "react";
import useListenMessages from "../../hooks/useListenMessages";
import { useMessages } from "../../services/queries";
import useConversation from "../../store/useConversation";
import MessageSkeleton from "../MessageSkeleton";
import Message from "./Message";
import useChatScroll from "../../hooks/useChatScroll";

const Messages = () => {
    const { selectedConversation, messages, setMessages } = useConversation();
    const { data, isPending } = useMessages(selectedConversation?.id || "");
    const ref = useChatScroll(messages) as MutableRefObject<HTMLDivElement>;
    useListenMessages();

    useEffect(() => {
        if (data) setMessages(data);
    }, [data, setMessages]);

    return (
        <div className="px-4 flex-1 overflow-auto" ref={ref}>
            {isPending &&
                [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!!messages?.length &&
                !isPending &&
                messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            {!isPending && !data?.length && (
                <p className="text-center text-white flex items-center justify-center h-full">
                    Send a message to start a conversation
                </p>
            )}
        </div>
    );
};

export default Messages;
