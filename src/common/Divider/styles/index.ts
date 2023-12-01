import { CSSProperties } from "react";
import { IDividerProps } from "../types";

export const getSecondaryStyles = (props: IDividerProps): CSSProperties => {
    const secondaryStyles: CSSProperties = {};

    const thickness: number = props.thickness || 2;
    secondaryStyles.width = props.vertical ? `${thickness}px` : "100%";
    secondaryStyles.height = props.vertical ? "100%" : `${thickness}px`;

    secondaryStyles.backgroundColor = props.color || "black";

    return secondaryStyles;
};
