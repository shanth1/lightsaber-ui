import { CSSProperties, ReactNode } from "react";

export type TChildren = ReactNode | string;

export interface IProps {
    children: TChildren;
    color?: string;
    p?: number;
    px?: number;
    py?: number;
    className?: string;
    style?: CSSProperties;
    css?: string;
}
