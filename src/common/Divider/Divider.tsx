import React, { CSSProperties, FC } from "react";
import { getSecondaryStyles } from "./styles";
import { getPrimaryStyles } from "../../styles";
import { IDividerProps } from "./types";

export const Divider: FC<IDividerProps> = (props) => {
    const style: CSSProperties = {
        ...getSecondaryStyles(props),
        ...getPrimaryStyles(props, false)
    };

    return <div style={style}></div>;
};
