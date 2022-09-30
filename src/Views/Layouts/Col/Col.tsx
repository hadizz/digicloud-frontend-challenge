import React from 'react';
import generateClassName from '../../../Helpers/Dom/generateClassName';
import { IColProps } from './Col.type';

const Col = ({
  col,
  order,
  xl,
  sm,
  alignSelf,
  className,
  children,
}: IColProps) => (
  <div
    className={generateClassName([
      `col-${col}`,
      order && `order-${order}`,
      alignSelf && `align-self-${alignSelf}`,
      sm && `col-sm-${sm}`,
      xl && `col-xl-${xl}`,
      className,
    ])}
  >
    {children}
  </div>
);

export default Col;
