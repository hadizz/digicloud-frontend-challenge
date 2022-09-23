import React, { useState } from 'react';
import Tabs from './Views/Components/Tabs';
import { ITabData } from './Views/Components/Tab';

function App() {
  const [tabs, setTabs] = useState<ITabData[]>([
    { label: 'Tab 1', value: 'a' },
    { label: 'Tab 2', value: 'b' },
    { label: 'Tab 3', value: 'c' },
  ]);
  const [activeTab, setActiveTab] = useState<string>('a');

  const handleOnChangeTabs = (tab: ITabData, index: number) => {
    setTabs([...tabs].map((tb, idx) => ({ ...tb, active: idx === index })));
    setActiveTab(tab.value);
  };

  return (
    <div className="m-4">
      <Tabs activeTab={activeTab} data={tabs} onChange={handleOnChangeTabs}>
        {(currentTab, tab) => {
          return (
            <span>
              {currentTab} {JSON.stringify(tab)}
            </span>
          );
        }}
      </Tabs>
    </div>
  );
}

export default App;
