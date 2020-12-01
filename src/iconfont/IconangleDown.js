/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconangleDown = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M797.147 399.238c-0.212 5.273-2.461 9.984-5.976 13.397l-266.006 266.008c-3.438 3.438-8.558 5.705-13.129 5.705s-9.728-2.304-13.129-5.705l-266.277-266.277c-3.438-3.438-5.705-8.558-5.705-13.129s2.304-9.728 5.705-13.129l28.562-28.562c3.355-3.488 8.049-5.667 13.252-5.707 5.15 0.214 9.86 2.462 13.274 5.977l224.317 224.314 224.585-224.585c3.438-3.438 8.558-5.705 13.129-5.705s9.728 2.304 13.129 5.705l28.562 28.562c3.452 3.463 5.617 8.212 5.714 13.465z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconangleDown.defaultProps = {
  size: 18,
};

IconangleDown = React.memo ? React.memo(IconangleDown) : IconangleDown;

export default IconangleDown;
