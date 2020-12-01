/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconsuoxiao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1027 1024" width={size} height={size} {...rest}>
      <Path
        d="M722.489 642.844c45.511-62.577 73.955-136.533 73.955-216.177 0-204.8-164.977-369.778-369.777-369.778S56.889 221.867 56.889 426.667s164.978 369.777 369.778 369.777c79.644 0 153.6-28.444 216.177-68.266l221.867 221.866c22.756 22.756 56.889 22.756 79.645 0 22.755-22.755 22.755-56.888 0-79.644L722.489 642.844z m-295.822 96.712c-170.667 0-312.89-142.223-312.89-312.89S256 113.779 426.668 113.779 739.556 256 739.556 426.667s-142.223 312.889-312.89 312.889"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M227.556 398.222h398.222v56.89H227.556z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconsuoxiao.defaultProps = {
  size: 18,
};

Iconsuoxiao = React.memo ? React.memo(Iconsuoxiao) : Iconsuoxiao;

export default Iconsuoxiao;
