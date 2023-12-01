import React, { FC, MouseEvent } from "react";
import { IStyledProps } from "../../types";
import { getStyleFromProps } from "../../styles";
import "./Button.css";

type TType = "button" | "submit" | "reset";

interface IButtonProps extends IStyledProps {
    children: string;
    disabled?: boolean;
    submit?: boolean;
    reset?: boolean;
    onClick?(event?: MouseEvent): void;
}

export const Button: FC<IButtonProps> = (props) => {
    const customStyle = getStyleFromProps(props);

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
