import React, { CSSProperties, FC, ReactNode } from "react";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { IProps } from "../../types";
import { updatePadding } from "../../styles/padding";

interface IBox extends IProps {
    borderRadius?: number;
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
    updatePadding(customStyle, p, px, py);

    return (
        <div className={className} style={customStyle}>
            {children}
        </div>
    );
};

export default Box;
