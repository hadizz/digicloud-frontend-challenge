import React from 'react';
import { TTabHTMLElementType, ITabProps } from './Tab.types';
import generateClassName from '../../../Helpers/Dom/generateClassName';
import classes from './Tab.module.sass';

const Tab: React.FC<ITabProps> = ({
  active,
  onClick,
  label,
  value,
  index,
  variant = 'default',
  tabIndex,
  onKeyUp,
}) => {
  const handleOnClick = (event: React.MouseEvent<TTabHTMLElementType>) => {
    onClick?.(event, { label, value, active, index });
  };

  return (
    <li
      className={generateClassName([
        classes.root,
        active && classes.active,
        classes?.[`variant-${variant}`],
        'cursor-pointer',
      ])}
      onClick={handleOnClick}
      role="tab"
      onKeyUp={onKeyUp}
      tabIndex={tabIndex}
      data-value={value}
      key={index}
    >
      {label}
    </li>
  );
};

export default Tab;
