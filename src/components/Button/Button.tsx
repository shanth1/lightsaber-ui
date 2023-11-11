import React, { FC, ReactNode } from 'react';
import './Button.css';

interface IButton {
  children: ReactNode | string;
  color?: string;
}

const Button: FC<IButton> = ({ children, color, ...props }) => {
  return (
    <div {...props} style={{ color }}>
      {children}
    </div>
  );
};

export default Button;
