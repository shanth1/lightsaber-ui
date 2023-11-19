import React, { FC, ReactNode, useContext } from "react";
import "./Button.css";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import { IProps } from "../../types";

interface IButton extends IProps {}

export const Button: FC<IButton> = ({ children, ...props }) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    return <button {...props}>{children}</button>;
};
