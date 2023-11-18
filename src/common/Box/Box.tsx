import React, { CSSProperties, FC, ReactNode } from "react";
import { getStyleObjFromCss } from "../../utils/cssToObj";

interface IBox {
    children: ReactNode | string;
    color?: string;
    p?: number;
    px?: number;
    py?: number;
    css?: string;
}

const Box: FC<IBox> = ({ children, color, p, px, py, css }) => {
    const style: CSSProperties = {};
    style.backgroundColor = color;
    style.padding = `${p}rem`;
    style.paddingLeft = `${px}rem`;
    style.paddingRight = `${px}rem`;
    style.paddingTop = `${py}rem`;
    style.paddingBottom = `${py}rem`;
    getStyleObjFromCss(css);

    return <div style={style}>{children}</div>;
};

export default Box;
