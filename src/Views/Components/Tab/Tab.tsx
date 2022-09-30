import React from 'react';
import { ITabProps, TTabHTMLElementType } from './Tab.types';
import generateClassName from '../../../Helpers/Dom/generateClassName';
import classes from './Tab.module.sass';
import generateTestId from '../../../Helpers/Dom/generateTestId';
import {
  TAB_ARIA_LABEL,
  TAB_BADGE_ARIA_LABEL,
  TAB_BADGE_TESTID,
  TAB_TESTID,
} from './Tab.constants';

const Tab: React.FC<ITabProps> = ({
  active,
  onClick,
  label,
  value,
  badge,
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
    <div
      className={generateClassName([
        classes.root,
        active && classes.active,
        classes?.[`variant-${variant}`],
        disable && classes.disable,
        disable ? 'cursor-not-allowed' : 'cursor-pointer',
      ])}
      onClick={handleOnClick}
      role="tab"
      aria-label={`${TAB_ARIA_LABEL}${label}`}
      onKeyUp={onKeyUp}
      tabIndex={tabIndex}
      data-value={value}
      key={index}
      {...generateTestId(`${TAB_TESTID}${value}`)}
    >
      <span className={classes.label}>{label}</span>
      {(badge !== undefined || badge !== null) && (
        <div
          className={classes.badge}
          {...generateTestId(`${TAB_BADGE_TESTID}${badge}`)}
          aria-label={`${TAB_BADGE_ARIA_LABEL}${badge}`}
        >
          {badge}
        </div>
      )}
    </div>
  );
};

export default Tab;
