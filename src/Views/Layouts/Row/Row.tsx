import React from 'react';
import classes from './Row.module.sass';
import { IRowProps } from './Row.types';
import generateClassName from '../../../Helpers/Dom/generateClassName';

const Row = ({ y, x, direction, className, children }: IRowProps) => {
  return (
    <div
      className={generateClassName([classes.row, direction, x, y, className])}
    >
      {children}
    </div>
  );
};

export default Row;
