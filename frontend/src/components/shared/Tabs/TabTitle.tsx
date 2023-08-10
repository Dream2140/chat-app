import { useCallback } from 'react';
import cn from 'classnames';

import { Button } from '../Button';
import { BUTTON_TYPE } from '../Button/Button';
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
    <div className="tabs__title"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
