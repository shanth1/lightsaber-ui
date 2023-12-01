import { CSSProperties } from "react";
import { ITypographyProps } from "../types";

export const getSecondaryStyles = (props: ITypographyProps): CSSProperties => {
    const secondaryStyles: CSSProperties = {};
    if (props.justify) secondaryStyles.textAlign = "justify";
    if (props.end || props.right) secondaryStyles.textAlign = "right";
    if (props.center) secondaryStyles.textAlign = "center";
    if (props.start || props.left) secondaryStyles.textAlign = "left";

    return secondaryStyles;
};
