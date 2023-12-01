import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import { IStyledProps } from "../../types";

interface IDividerProps extends IStyledProps {
    thickness?: string;
    orientation?: "vertical" | "horizontal";
}

export const Divider: FC<IDividerProps> = (props) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;
    const customStyle: CSSProperties = {
        backgroundColor: "black",
        height: "2px",
        width: "100%"
    };

    // if exists a thickness
    if (props.thickness) {
        customStyle.height = props.thickness;
    }

    // if exists a color
    if (props.color) {
        customStyle.backgroundColor = props.color;
    }

    // if exists orientation
    if (props.orientation) {
        if (props.orientation == "vertical") {
            customStyle.height = "100%";
            // and exists thickness
            if (props.thickness) {
                customStyle.width = props.thickness;
            } else {
                // not exitst thickness
                customStyle.width = "2px";
            }
        }
    }

    return <div style={customStyle}></div>;
};
