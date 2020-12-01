/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconangleDoubleLeft = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M559.433 743.619c-0.212 5.273-2.461 9.984-5.976 13.397l-28.291 28.294c-3.438 3.438-8.558 5.705-13.129 5.705s-9.728-2.304-13.129-5.705l-266.277-266.277c-3.438-3.438-5.705-8.558-5.705-13.129s2.304-9.728 5.705-13.129l266.277-266.277c3.438-3.438 8.558-5.705 13.129-5.705s9.728 2.304 13.129 5.705l28.562 28.562c3.438 3.438 5.705 8.558 5.705 13.129s-2.304 9.728-5.705 13.129l-224.585 224.585 224.585 224.585c3.452 3.463 5.617 8.212 5.714 13.465zM778.862 743.619c-0.212 5.273-2.461 9.984-5.976 13.397l-28.291 28.294c-3.438 3.438-8.558 5.705-13.129 5.705s-9.728-2.304-13.129-5.705l-266.277-266.277c-3.438-3.438-5.705-8.558-5.705-13.129s2.304-9.728 5.705-13.129l266.277-266.277c3.438-3.438 8.558-5.705 13.129-5.705s9.728 2.304 13.129 5.705l28.562 28.562c3.438 3.438 5.705 8.558 5.705 13.129s-2.304 9.728-5.705 13.129l-224.585 224.585 224.585 224.585c3.452 3.463 5.617 8.212 5.714 13.465z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconangleDoubleLeft.defaultProps = {
  size: 18,
};

IconangleDoubleLeft = React.memo ? React.memo(IconangleDoubleLeft) : IconangleDoubleLeft;

export default IconangleDoubleLeft;
