import React, { FC } from "react";
import { getPrimaryStyles } from "../../styles";
import { IBoxProps } from "./types";

const Box: FC<IBoxProps> = (props) => {
    const style = getPrimaryStyles(props);

    return (
        <div className={props.className} style={style}>
            {props.children}
        </div>
    );
};

export default Box;
