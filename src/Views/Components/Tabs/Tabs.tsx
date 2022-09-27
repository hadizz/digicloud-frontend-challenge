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
  loading,
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

  // todo: index is not secure for key prop. should use some unique value from array instead \
  //  resolve eslint-disable-next-line react/no-array-index-key please
  return (
    <div className={classes.root}>
      <ul>
        {!isArraySecure(tabs) ? (
          <Tab label="" value="" disable />
        ) : (
          tabs.map((tab, index) => (
            <Tab
              label={tab.label}
              value={tab.value}
              active={currentTab === tab.value || tab.active}
              disable={loading}
              // eslint-disable-next-line react/no-array-index-key
              key={tab.index ?? index}
              onClick={(event, selectedTab) =>
                handleOnChange(event, selectedTab, index)
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
          children(currentTab, findTabByValue(currentTab) as ITabData)
        )}
      </section>
    </div>
  );
};

export default Tabs;
