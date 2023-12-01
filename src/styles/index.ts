import { CSSProperties } from "react";
import { IDesignConfig } from "../provider";
import { IStyledProps } from "../types";
import { updatePadding } from "./padding";
import { getStyleObjFromCss } from "../utils/cssToObj";
import { updateBorderRadiusFromRounded } from "./rounded";
import { defaultConfig } from "../provider/data/defaultConfig";

export const getStyle = (props: IStyledProps): CSSProperties => {
    const config: IDesignConfig = defaultConfig;
    const style: CSSProperties = {};

    if (Object.prototype.hasOwnProperty.call(props, "p")) {
        style.backgroundColor = props.color;
        updateBorderRadiusFromRounded(style, props.rounded || config.rounded);
        updatePadding(style, props.p, props.px, props.py);
    }

    const styleFromCss = getStyleObjFromCss(props.css);
    const priorityStyle: CSSProperties = { ...styleFromCss, ...props.style };

    return priorityStyle;
};
