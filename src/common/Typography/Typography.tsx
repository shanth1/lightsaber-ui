import React, { CSSProperties, FC } from "react";
import { IProps } from "../../types";
import { getStyleFromProps } from "../../styles";

interface ITypographyProps extends IProps {
    children: string;
    start?: boolean;
    left?: boolean;
    center?: boolean;
    end?: boolean;
    right?: boolean;
    justify?: boolean;
}

export const Typography: FC<ITypographyProps> = (props) => {
    const secondaryStyles: CSSProperties = {};
    if (props.justify) secondaryStyles.textAlign = "justify";
    if (props.end || props.right) secondaryStyles.textAlign = "right";
    if (props.center) secondaryStyles.textAlign = "center";
    if (props.start || props.left) secondaryStyles.textAlign = "left";
    const primaryStyles: CSSProperties = {
        ...secondaryStyles,
        ...getStyleFromProps(props)
    };

    return (
        <div className={props.className} style={primaryStyles}>
            {props.children}
        </div>
    );
};
