import React, { FC, ReactNode, useContext } from 'react';
import './Button.css';
import { DesignContext, IDesignConfig } from 'provider';

interface IButton {
  children: ReactNode | string;
}

export const Button: FC<IButton> = ({ children, ...props }) => {
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
