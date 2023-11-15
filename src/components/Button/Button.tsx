import React, { FC, ReactNode, useContext, useState } from 'react';
import './Button.css';
import { IDesignConfig } from '../providers/types/config';
import { DesignContext } from '../providers/model/context';

interface IButton {
  children: ReactNode | string;
}

const Button: FC<IButton> = ({ children, ...props }) => {
  const config: IDesignConfig = useContext(DesignContext);

  return (
    <button
      {...props}
      style={{
        backgroundColor: config.themes.light.primary,
        color: config.themes.dark.primary,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
