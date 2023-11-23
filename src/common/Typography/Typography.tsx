import React, { CSSProperties, FC, useContext } from "react";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { getCustomClassName } from "../../styles/borderRadius";

interface ITypography {
    children: string;
    className?: string;
    css?: string;
    style?: CSSProperties;
}

export const Typography: FC<ITypography> = (props) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;
    const customClassName = getCustomClassName(
        config.borderRadius,
        props.className
    );

    const styleFromCss = getStyleObjFromCss(props.css);
    const customStyle: CSSProperties = { ...styleFromCss, ...props.style };

    return (
        <div className={customClassName} style={customStyle}>
            {props.children}
        </div>
    );
};
