import React, { CSSProperties, FC, useContext } from 'react'
import { getStyleObjFromCss } from "../../utils/cssToObj";
import { updatePadding } from "../../styles/padding";
import { DesignContext, IDesignConfig } from "../../provider";
import { defaultConfig } from "../../provider/data/defaultConfig";
import "../../styles/border.css";
import { getCustomClassName } from "../../styles/borderRadius";
import "./Modal.css"
import { IModal } from './IModal';

export const Modal: FC<IModal> = ({ 
  children, 
  color, 
  borderRadius, 
  p, px, py, 
  className, 
  style, css, 
  isOpen, onClose  
}) => {
    const config: IDesignConfig = useContext(DesignContext) || defaultConfig;

    const customClassName = getCustomClassName(config.borderRadius, className);

    const styleFromCss = getStyleObjFromCss(css);
    const customStyle: CSSProperties = { ...styleFromCss, ...style };

    customStyle.backgroundColor = color || customStyle.backgroundColor;
    customStyle.borderRadius = `${borderRadius}rem`;
    updatePadding(customStyle, p, px, py);

    return isOpen ? (
      <div className=''>
        <div className={customClassName} style={customStyle}>
            {children}
        </div>
      </div>
    ) : <></>;
};