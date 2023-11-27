import { IProps } from "../../types";

type CallbackFunction = () => void;

export interface IModal extends IProps {
    borderRadius?: number;
    isOpen: boolean;
    onClose: CallbackFunction;
    bpColor: string; //Back plate color
}
