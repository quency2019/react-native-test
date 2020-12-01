/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconmessage = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M263.7 347.9c-30.2 0.5-54.4 25.5-53.9 55.8 0.5 30.2 25.5 54.4 55.8 53.8 29.6-0.5 53.4-24.3 53.9-53.8 0-30.8-25-55.8-55.8-55.8zM511.3 347.9c-30.3 0.5-54.4 25.5-53.9 55.8 0.5 30.2 25.5 54.4 55.8 53.8 29.6-0.5 53.4-24.3 53.9-53.8 0-30.8-25-55.8-55.8-55.8zM758.9 347.9c-30.2 0.5-54.4 25.5-53.9 55.8 0.5 30.2 25.5 54.4 55.8 53.8 29.6-0.5 53.4-24.3 53.9-53.8 0-30.8-25-55.8-55.8-55.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M820.2 0h-616C105.1 0 24.4 80.6 24.4 179.7v395.4c0 97.8 78.6 177.5 176 179.6V1024l269.5-269.2h350.3c99.2 0 179.9-80.6 179.9-179.7V179.7C1000.1 80.6 919.4 0 820.2 0z m106.7 575.1c0 58.7-47.9 106.5-106.7 106.5H439.6L273.5 847.5V681.6h-69.3c-58.8 0-106.7-47.8-106.7-106.5V179.7c0-58.7 47.9-106.5 106.7-106.5h616c58.8 0 106.7 47.8 106.7 106.5v395.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconmessage.defaultProps = {
  size: 18,
};

Iconmessage = React.memo ? React.memo(Iconmessage) : Iconmessage;

export default Iconmessage;
