import React, { FC, MouseEventHandler } from "react";
import { getPrimaryStyles } from "../../styles";
import { IButtonProps, TType } from "./types";
import "./Button.css";

export const Button: FC<IButtonProps> = (props) => {
    const style = getPrimaryStyles(props);

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
            style={style}
        >
            {props.children}
        </button>
    );
};
