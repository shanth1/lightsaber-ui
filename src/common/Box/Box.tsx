import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { updatePadding } from "../../styles/padding";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import "../../styles/border.css";
import { getCustomClassName } from "../../styles/borderRadius";
import { IStyledProps } from "../../types";

interface IBoxProps extends IStyledProps {
    children: ReactNode;
    borderRadius?: number;
}

const Box: FC<IBoxProps> = (props) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    const customClassName = getCustomClassName(
        config.borderRadius,
        props.className
    );

    const styleFromCss = getStyleObjFromCss(props.css);
    const customStyle: CSSProperties = { ...styleFromCss, ...props.style };

    customStyle.backgroundColor = props.color || customStyle.backgroundColor;
    customStyle.borderRadius = `${props.borderRadius}rem`;
    updatePadding(customStyle, props.p, props.px, props.py);

    return (
        <div className={customClassName} style={customStyle}>
            {props.children}
        </div>
    );
};

export default Box;
