import {useMemo, useState} from 'react';

import {TabTitle} from './TabTitle';
import './Tabs.scss';

type TabsProps = {
  tabs: Array<tabsData>;
};

export type tabsData = {
  id: string;
  title: string;
  component: JSX.Element | null;
};

export const Tabs = ({tabs}: TabsProps): JSX.Element => {
  const [currentTabId, setCurrentTabId] = useState(tabs[0].id);

  const componentToRender = useMemo(() => {
    return tabs.find(tab => tab.id === currentTabId)?.component;
  }, [tabs, currentTabId]);

  return (
      <div className="tabs">
        <div className="tabs__header">
          {tabs.map(tab => (
              <TabTitle
                  title={tab.title}
                  onClick={setCurrentTabId}
                  id={tab.id}
                  key={tab.id}
                  isActive={tab.id === currentTabId}
              />
          ))}
        </div>
        <div className="tabs__content">
          {componentToRender}
        </div>
      </div>
  );
};
