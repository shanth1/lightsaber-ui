import React, { FC, ReactNode } from "react";
import { DesignContext } from "./context";
import { IDesignConfig } from "./types/config";
import { defaultConfig } from "./data/defaultConfig";
import { TChildren } from "../types";

interface IDesignProvider {
    children: TChildren;
    config?: IDesignConfig;
    activeTheme?: "light" | "dark" | string;
}

export const DesignProvider: FC<IDesignProvider> = ({ children, config }) => {
    const mixedConfig: IDesignConfig = !!config
        ? {
              themes: { ...defaultConfig.themes },
              borderRadius: config.borderRadius || defaultConfig.borderRadius,
              fontFamily: config.fontFamily?.length
                  ? config.fontFamily
                  : defaultConfig.fontFamily
          }
        : defaultConfig;

    if (config?.themes) {
        mixedConfig.themes = { ...defaultConfig.themes, ...config.themes };
        for (const key in config.themes) {
            if (Object.prototype.hasOwnProperty.call(config.themes, key)) {
                mixedConfig.themes[key].secondary =
                    config.themes[key].secondary ||
                    defaultConfig.themes?.light.secondary;
                mixedConfig.themes[key].text =
                    config.themes[key].text || defaultConfig.themes?.light.text;
                mixedConfig.themes[key].info =
                    config.themes[key].info || defaultConfig.themes?.light.info;
                mixedConfig.themes[key].success =
                    config.themes[key].success ||
                    defaultConfig.themes?.light.success;
                mixedConfig.themes[key].warning =
                    config.themes[key].warning ||
                    defaultConfig.themes?.light.warning;
                mixedConfig.themes[key].danger =
                    config.themes[key].danger ||
                    defaultConfig.themes?.light.danger;
                mixedConfig.themes[key].accent =
                    config.themes[key].accent ||
                    defaultConfig.themes?.light.accent;
            }
        }
    }

    return (
        <DesignContext.Provider value={mixedConfig}>
            {children}
        </DesignContext.Provider>
    );
};
