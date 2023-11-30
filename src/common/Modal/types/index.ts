import { ReactNode } from "react";
import { IStyledPropsWithChildren } from "../../../types";

type CallbackFunction = () => void;

export interface IModal extends IStyledPropsWithChildren<ReactNode | string> {
    borderRadius?: number;
    isOpen: boolean;
    onClose: CallbackFunction;
    bpColor: string; //Back plate color
}
