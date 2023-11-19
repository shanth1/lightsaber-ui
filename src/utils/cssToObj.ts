import { CSSProperties } from "react";

function doSomething(prop: keyof CSSProperties) {
}

export const getStyleObjFromCss = (
cssString: string | undefined): CSSProperties => {
    console.log(cssString);
    
    if (!cssString) return {}
    const styleObj: CSSProperties = {};

    cssString.replace(/\s/g, "").split(";").forEach((parametr) => {
        const [key, value] = parametr.split(":");
        // styleObj[key] = value;
    });

    return styleObj;
};
