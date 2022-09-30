import React from 'react';
import { TTabHTMLElementType, TTabValue } from '../Tab';

export interface ITabsProps<T> {
  activeTab: TTabValue;
  data: T[];
  onChange?: (
    tab: T,
    index: number,
    event: React.MouseEvent<TTabHTMLElementType>,
  ) => void;
  loading: boolean;
  children: (currentTab: TTabValue, tab: T) => JSX.Element;
}
