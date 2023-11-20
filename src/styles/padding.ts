import { CSSProperties } from "react";

export const updatePadding = (
    style: CSSProperties,
    p?: number,
    px?: number,
    py?: number
): void => {
    style.padding = `${p}rem`;
    style.paddingLeft = `${px}rem`;
    style.paddingRight = `${px}rem`;
    style.paddingTop = `${py}rem`;
    style.paddingBottom = `${py}rem`;
};
