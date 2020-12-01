/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconjisuanqi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1091 1024" width={size} height={size} {...rest}>
      <Path
        d="M272.659495 0 163.595697 0 163.595697 163.595697 0 163.595697 0 272.659495 163.595697 272.659495 163.595697 436.255192 272.659495 436.255192 272.659495 272.659495 436.255192 272.659495 436.255192 163.595697 272.659495 163.595697Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M654.382788 654.382788l436.255192 0 0 109.063798-436.255192 0 0-109.063798Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M654.382788 163.595697l436.255192 0 0 109.063798-436.255192 0 0-109.063798Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M654.382788 872.510384l436.255192 0 0 109.063798-436.255192 0 0-109.063798Z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M339.297476 611.956971 218.127596 733.181382 96.957716 611.956971 12.106082 696.808606 133.275961 817.978485 12.106082 939.148365 96.957716 1024 218.127596 902.83012 339.297476 1024 424.149111 939.148365 302.979231 817.978485 424.149111 696.808606Z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

Iconjisuanqi.defaultProps = {
  size: 18,
};

Iconjisuanqi = React.memo ? React.memo(Iconjisuanqi) : Iconjisuanqi;

export default Iconjisuanqi;
