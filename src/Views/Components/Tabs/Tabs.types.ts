import React from 'react';
import { ITabData, TTabHTMLElementType, TTabValue } from '../Tab';

export interface ITabsProps {
  activeTab: TTabValue;
  data: ITabData[];
  onChange?: (
    tab: ITabData,
    index: number,
    event: React.MouseEvent<TTabHTMLElementType>,
  ) => void;
  children: (currentTab: TTabValue, tab: ITabData) => React.ReactNode;
}
