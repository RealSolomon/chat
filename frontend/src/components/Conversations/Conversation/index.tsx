import { ConversationType } from "../../../models/IConversation";
import useConversation from "../../../store/useConversation";

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
    const { setSelectedConversation, selectedConversation } = useConversation();

    const isSelected = selectedConversation?.id === conversation.id;
    const isOnline = false;

    const handleSelectConversation = () =>
        setSelectedConversation(conversation);

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
                    isSelected ? "bg-sky-500" : "bg-slate-500"
                }`}
                onClick={handleSelectConversation}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-8 md:w-12 rounded-full">
                        <img
                            src={conversation.profilePicture}
                            alt="user avatar"
                        />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200 text-md md:text-md">
                            {conversation.fullName}
                        </p>
                    </div>
                </div>
            </div>

            <div className="divider my-0 py-0 h-1" />
        </>
    );
};

export default Conversation;
