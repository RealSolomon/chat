import { useAuthUser } from "../../../services/queries";
import { MessageCircle } from "lucide-react";

const EmptyChat = () => {
    const { data } = useAuthUser();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {data?.fullName}</p>
                <div className="flex items-center gap-2">
                    <p>Select a chat to start messaging </p>
                    <MessageCircle className="text-3xl md:text-6xl text-center" />
                </div>
            </div>
        </div>
    );
};

export default EmptyChat;
