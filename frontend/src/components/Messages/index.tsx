import { MOCK_MESSAGES } from "../../const";
import Message from "./Message";

const Messages = () => {
    return (
        <div className="px-4 flex-1 overflow-auto">
            {MOCK_MESSAGES.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    );
};

export default Messages;
