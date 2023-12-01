import React, { FC, useEffect } from "react";
import { IModalProps } from "./types";
import { getPrimaryStyles } from "../../styles";
import "./Modal.css";

export const Modal: FC<IModalProps> = (props) => {
    const customStyle = getPrimaryStyles(props);

    useEffect(() => {
        document.body.style.overflow = props.isOpen ? "hidden" : "visible";
    }, [props.isOpen]);

    return props.isOpen ? (
        <div
            className="back-plate"
            style={props.bpColor ? { backgroundColor: props.bpColor } : {}}
            onClick={props.onClose}
        >
            <div className="modal-wrapper">
                <div
                    className={"modal-window " + props.className}
                    style={customStyle}
                >
                    {props.children}
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};
