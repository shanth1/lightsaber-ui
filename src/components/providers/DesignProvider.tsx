import React, { FC, ReactNode } from 'react';
import { DesignContext } from './model/context';
import { IDesignConfig } from './types/config';
import { defaultConfig } from './model/defaultConfig';

interface IDesignProvider {
  children: ReactNode | string;
  config?: IDesignConfig;
}

const DesignProvider: FC<IDesignProvider> = ({
  children,
  config = defaultConfig,
}) => {
  return (
    <DesignContext.Provider value={config}>{children}</DesignContext.Provider>
  );
};

export default DesignProvider;
