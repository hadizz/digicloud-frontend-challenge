import React, { useCallback, useEffect, useState } from 'react';
import { ITabsProps } from './Tabs.types';
import isArraySecure from '../../../Helpers/Object/isArraySecure';
import Tab, { ITabData, TTabValue } from '../Tab';
import classes from './Tabs.module.sass';
import deepClone from '../../../Helpers/Object/deepClone';

function Tabs<T extends ITabData>({
  activeTab,
  data,
  onChange,
  loading,
  children,
}: ITabsProps<T>) {
  // states
  const [tabs, setTabs] = useState<T[]>([]);
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
    tab: T,
    index: number,
  ) => {
    onChange?.(tab, index, event);
  };

  // todo: index is not secure for key prop. should use some unique value from array instead \
  //  resolve eslint-disable-next-line react/no-array-index-key please
  return (
    <div className={classes.root}>
      <ul>
        {!isArraySecure(tabs) ? (
          <Tab label="" value="" disable badge="" />
        ) : (
          tabs.map((tab, index) => (
            <Tab
              label={tab.label}
              value={tab.value}
              badge={tab.badge}
              active={currentTab === tab.value || tab.active}
              disable={loading || tab.disable}
              // eslint-disable-next-line react/no-array-index-key
              key={tab.index ?? index}
              onClick={(event, selectedTab) =>
                handleOnChange(event, selectedTab as T, index)
              }
            />
          ))
        )}
      </ul>
      <section className={classes.content}>
        {loading ? (
          <div className="d-flex flex-x-center w100 my-16">
            <div className="loaderBase" />
          </div>
        ) : (
          children(currentTab, findTabByValue(currentTab) as T)
        )}
      </section>
    </div>
  );
}

export default Tabs;
