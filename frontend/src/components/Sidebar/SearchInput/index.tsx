import { FC } from "react";
import { IProps } from "./types";

const SearchInput: FC<IProps> = ({ value, onChange }) => {
    return (
        <form className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search…"
                className="input-sm lg:w-full md:input input-bordered rounded-full sm:rounded-full w-full"
                value={value}
                onChange={onChange}
            />
        </form>
    );
};

export default SearchInput;
