import { ReactNode } from 'react';

export type TColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type TOrderNumber = 1 | 2 | 3;
type TAlignSelfType = 'center' | 'start' | 'end';

export interface IColProps {
  col: TColNumber;
  order?: TOrderNumber;
  alignSelf?: TAlignSelfType;
  xl?: TColNumber;
  sm?: TColNumber;
  className?: string;
  children: ReactNode;
}
