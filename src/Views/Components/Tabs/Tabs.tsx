import React, { useCallback, useEffect, useState } from 'react';
import { ITabsProps } from './Tabs.types';
import isArraySecure from '../../../Helpers/Object/isArraySecure';
import Tab, { ITabData, TTabValue } from '../Tab';
import classes from './Tabs.module.sass';
import deepClone from '../../../Helpers/Object/deepClone';

const Tabs: React.FC<ITabsProps> = ({
  activeTab,
  data,
  onChange,
  children,
}) => {
  // states
  const [tabs, setTabs] = useState<ITabData[]>([]);
  const [currentTab, setCurrentTab] = useState<TTabValue>('');

  const findTabByValue = useCallback(
    (value: TTabValue) => tabs.find((tab) => tab.value === value),
    [tabs],
  );

  // lifecycles
  useEffect(() => {
    setTabs(deepClone(data));
  }, [data]);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  // handles
  const handleOnChange = (
    event: React.MouseEvent<HTMLLIElement>,
    tab: ITabData,
    index: number,
  ) => {
    onChange?.(tab, index, event);
  };

  // renders
  if (!isArraySecure(data)) {
    return <span>no data tot show // todo</span>;
  }

  // todo: index is not secure for key prop. should use some unique value from array instead \
  //  resolve eslint-disable-next-line react/no-array-index-key please
  return (
    <ul className={classes.root}>
      {tabs.map((tab, index) => (
        <Tab
          label={tab.label}
          value={tab.value}
          active={currentTab === tab.value || tab.active}
          // eslint-disable-next-line react/no-array-index-key
          key={tab.index ?? index}
          onClick={(event, selectedTab) =>
            handleOnChange(event, selectedTab, index)
          }
        />
      ))}
      <section className={classes.content}>
        {children(currentTab, findTabByValue(currentTab) as ITabData)}
      </section>
    </ul>
  );
};

export default Tabs;
