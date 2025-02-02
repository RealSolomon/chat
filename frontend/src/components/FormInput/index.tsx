import { FC } from "react";
import { IProps } from "./types";

const FormInput: FC<IProps> = ({
    value,
    onChange,
    label,
    type,
    placeholder,
}) => {
    return (
        <div>
            <label className="label p-2">
                <span className="text-base label-text">{label}</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full input input-bordered h-12"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default FormInput;
