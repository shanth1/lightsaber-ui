import React, { FC, ReactNode } from "react";

interface IRequiredProps {
    children: ReactNode;
    color?: string;
}

const Required: FC<IRequiredProps> = ({ children, color }) => {
    return (
        <>
            {children}
            <span style={{ color: color || "red" }}>*</span>
        </>
    );
};

export default Required;
