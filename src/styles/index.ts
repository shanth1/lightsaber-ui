import { CSSProperties, useContext } from "react";
import { DesignContext, IDesignConfig } from "../provider";
import { IStyledProps } from "../types";
import { updatePadding } from "./padding";
import { getStyleObjFromCss } from "../utils/cssToObj";
import { updateBorderRadiusFromRounded } from "./rounded";
import { defaultConfig } from "../provider/data/defaultConfig";

const isPropsStyled = <T>(props: T): boolean =>
    Object.prototype.hasOwnProperty.call(props, "p") && true;

export const getStyleFromProps = <T extends IStyledProps>(
    props: T
): CSSProperties => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;
    const customStyle: CSSProperties = {};

    if (isPropsStyled<T>(props)) {
        customStyle.backgroundColor = props.color;
        updateBorderRadiusFromRounded(
            customStyle,
            props.rounded || config.rounded
        );
        updatePadding(customStyle, props.p, props.px, props.py);
    }

    const styleFromCss = getStyleObjFromCss(props.css);
    const priorityStyle: CSSProperties = {
        ...customStyle,
        ...styleFromCss,
        ...props.style
    };

    return priorityStyle;
};
