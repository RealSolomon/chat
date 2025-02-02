import { Send } from "lucide-react";
import { useSendMessage } from "../../../services/mutations";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import useConversation from "../../../store/useConversation";
import { useSnackbar } from "notistack";

const MessageInput = () => {
    const { selectedConversation } = useConversation();
    const { enqueueSnackbar } = useSnackbar();
    const sendMessage = useSendMessage();

    const [message, setMessage] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message.trim()) return;
        sendMessage.mutate({
            conversationId: selectedConversation?.id || "",
            message,
        });
        setMessage("");
    };

    useEffect(() => {
        if (sendMessage.isError) {
            enqueueSnackbar("Failed to send message", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "left" },
            });
        }
    }, [sendMessage.isError, enqueueSnackbar]);

    return (
        <form className="px-4 mb-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                    value={message}
                    onChange={onChange}
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                    {sendMessage.isPending ? (
                        <span className="loading loading-spinner" />
                    ) : (
                        <Send className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
