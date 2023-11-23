import React, { CSSProperties, FC, useContext } from "react";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import { getStyleObjFromCss } from "../../utils/cssToObj";

interface ITypography {
    children: string;
    className?: string;
    css?: string;
    style?: CSSProperties;

    start?: boolean;
    left?: boolean;
    center?: boolean;
    end?: boolean;
    right?: boolean;
    justify?: boolean;
}

export const Typography: FC<ITypography> = (props) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;
    const customClassName = props.className;

    const styleFromCss = getStyleObjFromCss(props.css);
    const customStyle: CSSProperties = { ...styleFromCss, ...props.style };

    if (props.justify) customStyle.textAlign = "justify";
    if (props.end || props.right) customStyle.textAlign = "right";
    if (props.center) customStyle.textAlign = "center";
    if (props.start || props.left) customStyle.textAlign = "left";

    return (
        <div className={customClassName} style={customStyle}>
            {props.children}
        </div>
    );
};
