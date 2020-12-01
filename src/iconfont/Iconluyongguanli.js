/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconluyongguanli = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M807.4 128H702.8v64h104.6c13.2 0 23.9 10.7 23.9 23.9v656.2c0 13.2-10.7 23.9-23.9 23.9H216.6c-13.2 0-23.9-10.7-23.9-23.9V215.9c0-13.2 10.7-23.9 23.9-23.9h102.2v-64H216.6c-48.5 0-87.9 39.4-87.9 87.9v656.2c0 48.5 39.4 87.9 87.9 87.9h590.8c48.5 0 87.9-39.4 87.9-87.9V215.9c0-48.5-39.4-87.9-87.9-87.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M447 256h130c52.8 0 96-43.2 96-96 0-26.4-10.8-50.4-28.2-67.8S603.4 64 577 64h-2.2v50h2.2c12.2 0 23.7 4.8 32.4 13.6 8.7 8.7 13.6 20.3 13.6 32.4 0 12.2-4.8 23.7-13.6 32.4-8.7 8.8-20.3 13.6-32.4 13.6H447c-12.2 0-23.7-4.8-32.4-13.6-8.7-8.7-13.6-20.3-13.6-32.4 0-12.2 4.8-23.7 13.6-32.4 8.7-8.7 20.1-13.5 32.2-13.6V64c-52.7 0.1-95.8 43.3-95.8 96 0 26.4 10.8 50.4 28.2 67.8S420.6 256 447 256z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M510.8 89m-25 0a25 25 0 1 0 50 0 25 25 0 1 0-50 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M320.8 607.5L434 720.7c12.5 12.5 32.8 12.5 45.3 0L703 496.9l-45.3-45.3-201.1 201.2-90.5-90.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.7 0 45.2z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M728.1 426.5m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

Iconluyongguanli.defaultProps = {
  size: 18,
};

Iconluyongguanli = React.memo ? React.memo(Iconluyongguanli) : Iconluyongguanli;

export default Iconluyongguanli;
