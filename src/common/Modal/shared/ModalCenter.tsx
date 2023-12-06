
import React, { FC, useEffect } from "react";
import { IModalProps } from "../types";
import { getPrimaryStyles } from "../../../styles";
import "./Modal.css";

export const ModalCenter: FC<IModalProps> = (props) => {
    const style = getPrimaryStyles(props);

    useEffect(() => {
        document.body.style.overflow = props.isOpen ? "hidden" : "visible";
    }, [props.isOpen]);

    return props.isOpen ? (
        <div className="lui-modal-wrapper">
            <div
                className="lui-modal-background-plate"
                style={props.bpColor ? { backgroundColor: props.bpColor } : {}}
                onClick={props.onClose}
            />
            <div
                className={"lui-modal-cotent " + props.className}
                style={style}
            >
                {props.children}
                {props.closeBtn ? props.closeBtn : ''}
            </div>
        </div>
    ) : (
        <></>
    );
};
