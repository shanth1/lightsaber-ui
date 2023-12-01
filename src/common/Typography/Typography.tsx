import React, { CSSProperties, FC } from "react";
import { getStyleFromProps } from "../../styles";
import { ITypographyProps } from "./types";
import { getSecondaryStyles } from "./styles";

export const Typography: FC<ITypographyProps> = (props) => {
    const customStyle: CSSProperties = {
        ...getSecondaryStyles(props),
        ...getStyleFromProps(props)
    };

    return (
        <div className={props.className} style={customStyle}>
            {props.children}
        </div>
    );
};
