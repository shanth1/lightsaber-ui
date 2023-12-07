import { MouseEventHandler } from "react";
import { IStyledProps } from "../../../types";

export type TType = "button" | "submit" | "reset";

export interface IButtonProps extends IStyledProps {
    children: string;
    disabled?: boolean;
    submit?: boolean;
    reset?: boolean;
    onClick?: MouseEventHandler;
}
