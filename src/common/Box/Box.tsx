import React, { FC, ReactNode } from "react";
import { IStyledProps } from "../../types";
import { getStyle } from "../../styles";

interface IBoxProps extends IStyledProps {
    children: ReactNode;
    test: number;
    borderRadius?: number;
}

const Box: FC<IBoxProps> = (props) => {
    // const config: IDesignConfig = useContext(DesignContext) || defaultConfig;
    const customStyle = getStyle(props);

    return (
        <div className={props.className} style={customStyle}>
            {props.children}
        </div>
    );
};

export default Box;
