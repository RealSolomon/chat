import Messages from "../../Messages";
import MessageInput from "../MessageInput";

const MessageContainer = () => {
    return (
        <div className="w-full flex flex-col">
            <>
                {/* Header */}
                <div className="bg-slate-700 px-4 py-2 mb-2">
                    <span className="label-text">To:</span>{" "}
                    <span className="text-gray-500 font-bold">John doe</span>
                </div>

                <Messages />
                <MessageInput />
            </>
        </div>
    );
};

export default MessageContainer;
