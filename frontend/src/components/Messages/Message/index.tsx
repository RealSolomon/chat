import { MessageType } from "../../../models/IConversation";
import { useAuthUser } from "../../../services/queries";
import useConversation from "../../../store/useConversation";
import { formatTime } from "../../../utils/formatTime";

const Message = ({ message }: { message: MessageType }) => {
    const { data } = useAuthUser();
    const { selectedConversation } = useConversation();

    const fromMe = message.senderId === data?.id;
    const img = fromMe
        ? data?.profilePicture
        : selectedConversation?.profilePicture;

    const chatClass = fromMe ? "chat-end" : "chat-start";
    const bubbleBg = fromMe ? "bg-blue-500" : "";
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClass}`}>
            <div className="hidden md:block chat-image avatar">
                <div className="w-6 md:w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={img} />
                </div>
            </div>
            <p
                className={`chat-bubble text-white ${bubbleBg} ${shakeClass} text-sm md:text-md`}
            >
                {message.body}
            </p>
            <span className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
                {formatTime(message.createdAt)}
            </span>
        </div>
    );
};

export default Message;
