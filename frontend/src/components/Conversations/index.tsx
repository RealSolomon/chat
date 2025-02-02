import { FC } from "react";
import { useConversations } from "../../services/queries";
import Conversation from "./Conversation";
import { IProps } from "./types";

const Conversations: FC<IProps> = ({ data }) => {
    const { isPending } = useConversations();

    return (
        <div className="pb-2 flex flex-col overflow-auto gap-1.5">
            {!!data?.length &&
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
