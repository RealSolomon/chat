import { MOCK_CONVERSATIONS } from "../../const";
import Conversation from "./Conversation";

const Conversations = () => {
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {MOCK_CONVERSATIONS.map((conversation) => (
                <Conversation
                    key={conversation.id}
                    conversation={conversation}
                />
            ))}
        </div>
    );
};

export default Conversations;
