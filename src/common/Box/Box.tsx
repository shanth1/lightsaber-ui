import React, { FC } from "react";
import { getStyleFromProps } from "../../styles";
import { IBoxProps } from "./types";

const Box: FC<IBoxProps> = (props) => {
    const customStyle = getStyleFromProps(props);

    return (
        <div className={props.className} style={customStyle}>
            {props.children}
        </div>
    );
};

export default Box;
