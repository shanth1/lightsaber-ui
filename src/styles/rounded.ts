import { CSSProperties } from "react";
import { TRounded } from "../types";

enum ERounded {
    NONE = "0px",
    SM = "0.125rem",
    MD = "0.25rem",
    LG = "0.375rem",
    XL = "0.5rem",
    XXL = "0.75rem",
    XXXL = "1rem",
    FULL = "100%"
}

export const updateBorderRadiusFromRounded = (
    style: CSSProperties,
    rounded?: TRounded
): void => {
    switch (rounded) {
        case "none":
            style.borderRadius = ERounded.NONE;
            break;
        case "sm":
            style.borderRadius = ERounded.SM;
            break;
        case "md":
            style.borderRadius = ERounded.MD;
            break;
        case "lg":
            style.borderRadius = ERounded.LG;
            break;
        case "xl":
            style.borderRadius = ERounded.XL;
            break;
        case "2xl":
            style.borderRadius = ERounded.XXL;
            break;
        case "3xl":
            style.borderRadius = ERounded.XXXL;
            break;
        case "full":
            style.borderRadius = ERounded.FULL;
            break;
        default:
            break;
    }
};
