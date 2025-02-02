import useConversation from "../../../store/useConversation";
import Messages from "../../Messages";
import EmptyChat from "../EmptyChat";
import MessageInput from "../MessageInput";

const MessageContainer = () => {
    const { selectedConversation } = useConversation();

    if (!selectedConversation) {
        return (
            <div className="w-full flex flex-col">
                <EmptyChat />
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col">
            <>
                {/* Header */}
                <div className="bg-slate-700 px-4 py-4 mb-4">
                    <span className="label-text">To:</span>{" "}
                    <span className="text-gray-500 font-bold">
                        {selectedConversation.fullName}
                    </span>
                </div>

                <Messages />
                <MessageInput />
            </>
        </div>
    );
};

export default MessageContainer;
