import React, {
    CSSProperties,
    FC,
    MouseEvent,
    ReactNode,
    useContext
} from "react";
import "./Button.css";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import { IProps } from "../../types";
import { getCustomClassName } from "../../styles/borderRadius";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { updatePadding } from "../../styles/padding";

interface IButton extends IProps {
    borderRadius?: number;
    disabled?: boolean;
    onClick?(event?: MouseEvent): void;
}

export const Button: FC<IButton> = (props) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    const customClassName = getCustomClassName(
        config.borderRadius,
        props.className
    );

    const styleFromCss: CSSProperties = getStyleObjFromCss(props.css);
    const customStyle: CSSProperties = { ...styleFromCss, ...props.style };

    customStyle.backgroundColor = props.color || customStyle.backgroundColor;
    customStyle.borderRadius = `${props.borderRadius}rem`;
    updatePadding(customStyle, props.p, props.px, props.py);

    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={[
                "button",
                props.disabled && "button_disabled",
                customClassName
            ].join(" ")}
            style={customStyle}
        >
            {props.children}
        </button>
    );
};
