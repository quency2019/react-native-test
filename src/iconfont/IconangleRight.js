/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconangleRight = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.002 505.905c-0.212 5.273-2.461 9.984-5.976 13.397l-266.006 266.008c-3.438 3.438-8.558 5.705-13.129 5.705s-9.728-2.304-13.129-5.705l-28.562-28.562c-3.488-3.355-5.667-8.049-5.707-13.252 0.214-5.15 2.462-9.86 5.977-13.274l224.314-224.317-224.585-224.585c-3.438-3.438-5.705-8.558-5.705-13.129s2.304-9.728 5.705-13.129l28.562-28.562c3.438-3.438 8.558-5.705 13.129-5.705s9.728 2.304 13.129 5.705l266.277 266.277c3.452 3.463 5.617 8.212 5.714 13.465z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconangleRight.defaultProps = {
  size: 18,
};

IconangleRight = React.memo ? React.memo(IconangleRight) : IconangleRight;

export default IconangleRight;
