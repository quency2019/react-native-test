/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGroup = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M113.088 712.512v121.6c0 12.8 6.4 19.2 19.2 19.2h441.6c12.8 0 19.2-6.4 19.2-19.2v-115.2c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v115.2c0 51.2-38.4 89.6-89.6 89.6h-448c-51.2 0-89.6-38.4-89.6-89.6v-659.2c0-51.2 38.4-89.6 89.6-89.6h441.6c51.2 0 89.6 38.4 89.6 89.6v115.2c0 19.2-19.2 38.4-38.4 38.4s-32-12.8-32-32v-121.6c0-12.8-6.4-19.2-19.2-19.2h-441.6c-12.8 0-19.2 6.4-19.2 19.2v537.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M740.288 622.912c-12.8 12.8-12.8 38.4 0 51.2 6.4 6.4 19.2 12.8 25.6 12.8s19.2-6.4 25.6-12.8l134.4-134.4c12.8-12.8 12.8-38.4 0-51.2l-134.4-134.4c-12.8-12.8-38.4-12.8-51.2 0s-12.8 38.4 0 51.2l76.8 76.8h-352c-19.2-6.4-38.4 12.8-38.4 32s19.2 38.4 38.4 38.4h352l-76.8 70.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconGroup.defaultProps = {
  size: 18,
};

IconGroup = React.memo ? React.memo(IconGroup) : IconGroup;

export default IconGroup;
