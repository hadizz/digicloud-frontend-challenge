import React from 'react';
import { ITabProps, TTabHTMLElementType } from './Tab.types';
import generateClassName from '../../../Helpers/Dom/generateClassName';
import classes from './Tab.module.sass';

const Tab: React.FC<ITabProps> = ({
  active,
  onClick,
  label,
  value,
  disable,
  index,
  variant = 'default',
  tabIndex,
  onKeyUp,
}) => {
  const handleOnClick = (event: React.MouseEvent<TTabHTMLElementType>) => {
    if (!disable && onClick) onClick(event, { label, value, active, index });
  };

  return (
    <li
      className={generateClassName([
        classes.root,
        active && classes.active,
        classes?.[`variant-${variant}`],
        disable && classes.disable,
        disable ? 'cursor-not-allowed' : 'cursor-pointer',
      ])}
      onClick={handleOnClick}
      role="tab"
      onKeyUp={onKeyUp}
      tabIndex={tabIndex}
      data-value={value}
      key={index}
    >
      <span className={classes.label}>{label}</span>
    </li>
  );
};

export default Tab;
