import React, { FC, ReactNode } from 'react';
import { DesignContext } from './context';
import { IDesignConfig } from './types/config';
import { defaultConfig } from './data/defaultConfig';

interface IDesignProvider {
  children: ReactNode | string;
  config?: IDesignConfig;
}

export const DesignProvider: FC<IDesignProvider> = ({
  children,
  config = defaultConfig,
}) => {
  return (
    <DesignContext.Provider value={config}>{children}</DesignContext.Provider>
  );
};
