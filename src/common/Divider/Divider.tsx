import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { getSecondaryStyles } from "./styles";
import { getPrimaryStyles } from "../../styles";
import { IDividerProps } from "./types";

export const Divider: FC<IDividerProps> = (props) => {
    const customStyle: CSSProperties = {
        ...getSecondaryStyles(props),
        ...getPrimaryStyles(props)
    };

    return <div style={customStyle}></div>;
};
