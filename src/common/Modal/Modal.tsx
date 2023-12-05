import React, { FC, useEffect } from "react";
import { IModalProps } from "./types";
import { getPrimaryStyles } from "../../styles";
import "./Modal.css";

export const Modal: FC<IModalProps> = (props) => {
    const style = getPrimaryStyles(props);

    const CloseBtn = props.closeBtn ? props.closeBtn : <div>X</div>; // For now 'X' is default close btn

    useEffect(() => {
        document.body.style.overflow = props.isOpen ? "hidden" : "visible";
    }, [props.isOpen]);

    return props.isOpen ? (
        <div className="lui-modal-wrapper">
            <div className="lui-modal-content-wrapper">
                <div
                    className="lui-modal-background-plate"
                    style={
                        props.bpColor ? { backgroundColor: props.bpColor } : {}
                    }
                    onClick={props.onClose}
                />
                <div
                    className={"lui-modal-cotent " + props.className}
                    style={style}
                >
                    {props.children}
                </div>
                <div onClick={props.onClose} className="lui-modal-close-btn">
                    {CloseBtn}
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};
