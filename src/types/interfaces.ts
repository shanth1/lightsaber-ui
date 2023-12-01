import { CSSProperties } from "react";
import { TRounded } from "./types";

export interface IProps {
    className?: string;
    style?: CSSProperties;
    css?: string;
}

export interface IStyledProps extends IProps {
    color?: string;
    rounded?: TRounded;
    p?: number;
    px?: number;
    py?: number;
}
