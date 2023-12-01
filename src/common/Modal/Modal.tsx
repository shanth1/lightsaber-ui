import React, { CSSProperties, FC, useContext, useEffect } from "react";
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { updatePadding } from "../../styles/padding";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import "../../styles/border.css";
import { getCustomClassName } from "../../styles/borderRadius";
import "./Modal.css";
import { IModalProps } from "./types";

export const Modal: FC<IModalProps> = ({
    children,
    color,
    borderRadius,
    p,
    px,
    py,
    className,
    style,
    css,
    isOpen,
    onClose,
    bpColor //? back plate color. not sure about the name yet
}) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    const customClassName = getCustomClassName(config.borderRadius, className);

    const styleFromCss = getStyleObjFromCss(css);
    const customStyle: CSSProperties = { ...styleFromCss, ...style };

    customStyle.backgroundColor = color || customStyle.backgroundColor;
    customStyle.borderRadius = `${borderRadius}rem`;
    updatePadding(customStyle, p, px, py);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "visible";
    }, [isOpen]);

    return isOpen ? (
        <div
            className="back-plate"
            style={bpColor ? { backgroundColor: bpColor } : {}}
            onClick={onClose}
        >
            <div className="modal-wrapper">
                <div
                    className={"modal-window " + customClassName}
                    style={customStyle}
                >
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};
