import { CSSProperties } from "react";

const cssToCamelCase = (cssString: string) => {
  return cssString.replace(/-([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}

export const getStyleObjFromCss = (
cssString: string | undefined): CSSProperties => {
    
    if (!cssString) return {}
    
    const styleObj: Record<string, any> = {};

    cssString.replace(/\s/g, "").split(";").forEach((parametr) => {
        const [key, value] = parametr.split(":");
        const keyCheckCamelCase: string = cssToCamelCase(key);
        styleObj[keyCheckCamelCase] = value;
    });

    const styleObjCssProperties: CSSProperties = styleObj as CSSProperties;

    return styleObjCssProperties;
};
