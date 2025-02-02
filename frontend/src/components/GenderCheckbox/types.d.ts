import { ChangeEvent } from "react";
import { Gender } from "../../models/IForm";

export interface IProps {
    selectedGender: string;
    onChange: (gender: Gender) => (e: ChangeEvent<HTMLInputElement>) => void;
}
