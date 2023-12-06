import { ReactNode } from "react";
import { IStyledProps } from "../../../types";

type CallbackFunction = () => void;

export interface IModalProps extends IStyledProps {
    children: ReactNode | string;
    isOpen: boolean;
    onClose: CallbackFunction;
    bpColor?: string; //Back plate color
    closeBtn?: ReactNode | string;
}
