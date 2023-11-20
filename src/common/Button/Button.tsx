import React, { FC, ReactNode, useContext } from "react";
import "./Button.css";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import { IProps } from "../../types";

export const Button: FC<IProps> = ({ children, ...props }) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    return <button {...props}>{children}</button>;
};
