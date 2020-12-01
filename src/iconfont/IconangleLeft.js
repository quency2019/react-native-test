/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconangleLeft = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M669.147 268.191c-0.212 5.273-2.461 9.984-5.976 13.397l-224.314 224.317 224.585 224.585c3.438 3.438 5.705 8.558 5.705 13.129s-2.304 9.728-5.705 13.129l-28.562 28.562c-3.438 3.438-8.558 5.705-13.129 5.705s-9.728-2.304-13.129-5.705l-266.277-266.277c-3.438-3.438-5.705-8.558-5.705-13.129s2.304-9.728 5.705-13.129l266.277-266.277c3.438-3.438 8.558-5.705 13.129-5.705s9.728 2.304 13.129 5.705l28.562 28.562c3.488 3.355 5.667 8.049 5.707 13.252z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconangleLeft.defaultProps = {
  size: 18,
};

IconangleLeft = React.memo ? React.memo(IconangleLeft) : IconangleLeft;

export default IconangleLeft;
