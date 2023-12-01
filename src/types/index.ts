import { CSSProperties } from "react";

export interface IProps {
    className?: string;
    style?: CSSProperties;
    css?: string;
}

export interface IStyledProps extends IProps {
    color?: string;
    p?: number;
    px?: number;
    py?: number;
}
