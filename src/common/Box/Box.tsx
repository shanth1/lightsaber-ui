import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { IProps } from "../../types";
import { updatePadding } from "../../styles/padding";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import "../../styles/border.css";
import { getCustomClassName } from "../../styles/borderRadius";

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
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    const customClassName = getCustomClassName(config.borderRadius, className);

    const styleFromCss = getStyleObjFromCss(css);
    const customStyle: CSSProperties = { ...styleFromCss, ...style };

    customStyle.backgroundColor = color || customStyle.backgroundColor;
    customStyle.borderRadius = `${borderRadius}rem`;
    updatePadding(customStyle, p, px, py);

    return (
        <div className={customClassName} style={customStyle}>
            {children}
        </div>
    );
};

export default Box;
