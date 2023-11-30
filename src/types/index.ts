import { CSSProperties, Children, ReactNode } from "react";

export interface IProps {
    className?: string;
    style?: CSSProperties;
    css?: string;
}

export interface IPropsWithChildren<Children> extends IProps {
    children: Children;
}

export interface IStyledProps extends IProps {
    color?: string;
    p?: number;
    px?: number;
    py?: number;
}

export interface IStyledPropsWithChildren<T> extends IStyledProps {
    children: T;
}
