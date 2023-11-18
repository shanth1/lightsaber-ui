import React, { FC, ReactNode, useContext } from 'react';
import './Button.css';
import { DesignContext, IDesignConfig } from '../../provider';
import { defaultConfig } from '../../provider/data/defaultConfig';

interface IButton {
  children: ReactNode | string;
}

export const Button: FC<IButton> = ({ children, ...props }) => {
  const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

  return <button {...props}>{children}</button>;
};
