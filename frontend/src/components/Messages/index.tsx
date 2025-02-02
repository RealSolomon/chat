import { useMessages } from "../../services/queries";
import useConversation from "../../store/useConversation";
import MessageSkeleton from "../MessageSkeleton";
import Message from "./Message";

const Messages = () => {
    const { selectedConversation } = useConversation();
    const { data, isPending } = useMessages(selectedConversation?.id || "");

    return (
        <div className="px-4 flex-1 overflow-auto">
            {isPending &&
                [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!!data?.length &&
                data.map((message) => (
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
