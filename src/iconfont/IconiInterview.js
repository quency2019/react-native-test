/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiInterview = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M241.92 640a191.168 191.168 0 0 0-38.144 64H64V576a128 128 0 0 1 128-128h128a189.76 189.76 0 0 0 11.776 64H192a64.064 64.064 0 0 0-64 64v64zM960 512V128H512v128a189.76 189.76 0 0 1 64 11.776V192h320v285.76l-64 42.624V448h-128a189.76 189.76 0 0 1-11.776 64H768v128z m-248.448 149.888A127.424 127.424 0 0 0 640 640H384a127.424 127.424 0 0 0-71.552 21.888 128.832 128.832 0 0 0-34.56 34.56A127.36 127.36 0 0 0 256 768v128h512v-128a127.36 127.36 0 0 0-21.888-71.552 128.832 128.832 0 0 0-34.56-34.56zM512 576a128 128 0 1 0-128-128 128 128 0 0 0 128 128zM332.16 382.72C328.128 383.232 324.16 384 320 384a128 128 0 1 1 128-128c0 4.16-0.832 8.128-1.28 12.16a191.808 191.808 0 0 0-114.56 114.56zM384 256a64 64 0 1 0-64 64 64.064 64.064 0 0 0 64-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconiInterview.defaultProps = {
  size: 18,
};

IconiInterview = React.memo ? React.memo(IconiInterview) : IconiInterview;

export default IconiInterview;
