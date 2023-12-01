import React, { CSSProperties, FC, MouseEvent, useContext } from "react";
import "./Button.css";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { updatePadding } from "../../styles/padding";
import { IStyledProps } from "../../types";

type TType = "button" | "submit" | "reset";

interface IButtonProps extends IStyledProps {
    children: string;
    borderRadius?: number;
    disabled?: boolean;
    submit?: boolean;
    reset?: boolean;
    onClick?(event?: MouseEvent): void;
}

export const Button: FC<IButtonProps> = (props) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    const styleFromCss: CSSProperties = getStyleObjFromCss(props.css);
    const customStyle: CSSProperties = { ...styleFromCss, ...props.style };

    customStyle.backgroundColor = props.color || customStyle.backgroundColor;
    customStyle.borderRadius = `${props.borderRadius}rem`;
    updatePadding(customStyle, props.p, props.px, props.py);

    let type: TType = "button";
    if (props.reset) type = "reset";
    if (props.submit) type = "submit";

    return (
        <button
            type={type}
            disabled={props.disabled}
            onClick={props.onClick}
            className={[
                "button",
                props.disabled && "button_disabled",
                props.className
            ].join(" ")}
            style={customStyle}
        >
            {props.children}
        </button>
    );
};
