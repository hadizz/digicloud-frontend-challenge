import React from 'react';

// you can add your design system tab styles here and define variants.
export type TTabVariants = 'default';

export type TTabHTMLElementType = HTMLDivElement;

export type TTabValue = string;

export interface ITabData {
  active?: boolean;
  label: string;
  value: TTabValue; // todo: use Pick?
  badge?: number | string;
  disable?: boolean;
  index?: number;
}

export interface ITabProps
  extends ITabData,
    Partial<Omit<TTabHTMLElementType, 'value'>> {
  variant?: TTabVariants;
  onClick?: (
    event: React.MouseEvent<TTabHTMLElementType>,
    tab: Partial<ITabData>,
  ) => void;
  onKeyUp?: (event: React.KeyboardEvent<TTabHTMLElementType>) => void;
}
