import { IProps } from "../../../types";

export interface ITypographyProps extends IProps {
    children: string;
    start?: boolean;
    left?: boolean;
    center?: boolean;
    end?: boolean;
    right?: boolean;
    justify?: boolean;
}
