import { ReactNode } from "react";

type CallbackFunction = () => void;

export interface IModalProps {
    children: ReactNode | string;
    isOpen: boolean;
    onClose: CallbackFunction;
    showCloseButton?: boolean;
    color?: string;
}
