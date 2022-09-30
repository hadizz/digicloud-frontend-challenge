import { ReactNode } from 'react';

type TDirectionType = 'reverse' | 'column' | 'column-reverse';
type TJustifyType =
  | 'flex-x-center'
  | 'flex-x-between'
  | 'flex-x-around'
  | 'flex-x-end';
type TAlignType = 'flex-y-center' | 'flex-y-stretch' | 'flex-y-end';

export interface IRowProps {
  direction?: TDirectionType;
  x?: TJustifyType;
  y?: TAlignType;
  className?: string;
  children: ReactNode;
}
