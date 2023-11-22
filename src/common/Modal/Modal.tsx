import React, { FC, ReactNode } from 'react'

interface IModal {
    children: ReactNode | string;
    color?: string;
  }
  
  const Modal: FC<IModal> = ({ children, color, ...props }) => {
    return (
      <div {...props} style={{ color }}>
        {children}
      </div>
    );
  };

export default Modal