import { FC } from "react";
import { IProps } from "./types";

const GenderCheckbox: FC<IProps> = ({ selectedGender, onChange }) => {
    return (
        <div className="flex gap-5">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Male</span>
                    <input
                        type="checkbox"
                        checked={selectedGender === "male"}
                        className="checkbox checkbox-info"
                        onChange={onChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Female</span>
                    <input
                        type="checkbox"
                        checked={selectedGender === "female"}
                        className="checkbox checkbox-info"
                        onChange={onChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;
