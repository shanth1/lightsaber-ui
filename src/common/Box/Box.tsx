import React, { FC, ReactNode } from "react";
import { IStyledProps } from "../../types";
import { getStyleFromProps } from "../../styles";

interface IBoxProps extends IStyledProps {
    children: ReactNode;
}

const Box: FC<IBoxProps> = (props) => {
    const customStyle = getStyleFromProps(props);

    return (
        <div className={props.className} style={customStyle}>
            {props.children}
        </div>
    );
};

export default Box;
