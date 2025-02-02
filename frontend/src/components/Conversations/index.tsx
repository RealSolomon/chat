import { useConversations } from "../../services/queries";
import Conversation from "./Conversation";

const Conversations = () => {
    const { data, isPending } = useConversations();

    console.log(data, "data");

    return (
        <div className="py-2 flex flex-col overflow-auto">
            {data?.length &&
                data.map((conversation) => (
                    <Conversation
                        key={conversation.id}
                        conversation={conversation}
                    />
                ))}
            {isPending && <span className="loading loading-spinner mx-auto" />}
        </div>
    );
};

export default Conversations;
