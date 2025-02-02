import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface IProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
}
