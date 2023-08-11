import { useCallback } from 'react';
import cn from 'classnames';

import './Tabs.scss';

type tabTitleProps = {
  title: string;
  onClick?: (id: string) => void;
  id: string;
  isActive: boolean;
};

export const TabTitle = ({ title, onClick, id, isActive }: tabTitleProps): JSX.Element => {
  const handleClick = useCallback(() => {
    onClick && onClick(id);
  }, [onClick, id]);

  return (
    <div
         className={cn('tabs__title', { 'tabs__title--active': isActive })}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
