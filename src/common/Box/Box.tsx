import React, { CSSProperties, FC, ReactNode } from "react";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { IProps } from "../../types";

interface IBox extends IProps {
    borderRadius?: number;
    color?: string;
    p?: number;
    px?: number;
    py?: number;
    className?: string;
    style?: CSSProperties;
    css?: string;
}

const Box: FC<IBox> = ({
    children,
    color,
    borderRadius,
    p,
    px,
    py,
    className,
    style,
    css
}) => {
    const styleFromCss = getStyleObjFromCss(css);
    const customStyle: CSSProperties = { ...styleFromCss, ...style };

    customStyle.backgroundColor = color || customStyle.backgroundColor;
    customStyle.borderRadius = `${borderRadius}rem`;
    customStyle.padding = `${p}rem`;
    customStyle.paddingLeft = `${px}rem`;
    customStyle.paddingRight = `${px}rem`;
    customStyle.paddingTop = `${py}rem`;
    customStyle.paddingBottom = `${py}rem`;

    return (
        <div className={className} style={customStyle}>
            {children}
        </div>
    );
};

export default Box;
