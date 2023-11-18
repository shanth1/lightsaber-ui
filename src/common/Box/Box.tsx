import React, { CSSProperties, FC, ReactNode } from 'react';

interface IBox {
  children: ReactNode | string;
  color?: string;
  p?: number;
  px?: number;
  py?: number;
}

const Box: FC<IBox> = ({ children, color, p, px, py }) => {
  const style: CSSProperties = {};
  style.backgroundColor = color;
  style.padding = `${p}rem`;
  style.paddingLeft = `${px}rem`;
  style.paddingRight = `${px}rem`;
  style.paddingTop = `${py}rem`;
  style.paddingBottom = `${py}rem`;

  return <div style={style}>{children}</div>;
};

export default Box;
