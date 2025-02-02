import { ChangeEvent, useState } from "react";
import Conversations from "../Conversations";
import LogoutButton from "./LoguotButton";
import SearchInput from "./SearchInput";
import { useConversations } from "../../services/queries";

const Sidebar = () => {
    const conversations = useConversations();
    const [search, setSearch] = useState("");

    const conversationsArr = conversations?.data?.filter((conv) =>
        conv.fullName.toLowerCase().includes(search.toLowerCase())
    );

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="border-r border-slate-500 p-1 md:p-4 flex flex-col w-44 md:w-1/3">
            <SearchInput value={search} onChange={handleChangeSearch} />
            <div className="divider px-3" />
            <Conversations data={conversationsArr} />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;
