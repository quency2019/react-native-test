/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzhengshu2 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M815.1 367V189.4H637.5L512 63.9 386.5 189.4H208.9V367L83.4 492.5 208.9 618v177.5h177.5L512 872.7l125.5-77.2H815V618l125.5-125.5L815.1 367zM512 733.7c-133.2 0-241.2-108-241.2-241.2s108-241.2 241.2-241.2 241.2 108 241.2 241.2-108 241.2-241.2 241.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M675.3 959.6L512 870.9l-163.3 88.7V770.1h326.6zM512 319.1l53.7 108.8 120.2 17.5-87 84.7 20.6 119.7L512 593.3l-107.5 56.5 20.6-119.7-87-84.7 120.2-17.5z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconzhengshu2.defaultProps = {
  size: 18,
};

Iconzhengshu2 = React.memo ? React.memo(Iconzhengshu2) : Iconzhengshu2;

export default Iconzhengshu2;
