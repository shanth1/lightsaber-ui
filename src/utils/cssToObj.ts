import { CSSProperties } from "react";

function doSomething(prop: keyof CSSProperties) {
}

export const getStyleObjFromCss = (
cssString: string | undefined): CSSProperties => {
    console.log(cssString);
    
    if (!cssString) return {}
    const styleObj: CSSProperties = {};

    // [["display", "block"], ["color", "#0000000"]]

    cssString.replace(" ", "").split(";").forEach((parametr) => {
        const [key, value] = parametr.split(":");
        // styleObj[key] = value;
    });

    return styleObj;
};
