import React, { FC } from "react";
import { IModalProps } from "./types";
import "./Modal.css";

export const Modal: FC<IModalProps> = (props) => {
    const style = { background: props.color };

    return (
        props.isOpen && (
            <div className="lui-modal" onClick={props.onClose}>
                <div
                    className="lui-modal-content"
                    style={style}
                    onClick={(e) => e.stopPropagation()}
                >
                    {props.children}
                    {props.showCloseButton && (
                        <div
                            onClick={props.onClose}
                            className="lui-close-button "
                        ></div>
                    )}
                </div>
            </div>
        )
    );
};
