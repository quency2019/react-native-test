/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshenqing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M254.927 230.75h506.25V287h-506.25v-56.25zM254.927 343.25h506.25v56.25h-506.25v-56.25zM254.927 455.75h225.001V512H254.927v-56.25zM704.927 833.024L572.54 700.637l39.774-39.774 92.613 92.613L853.79 604.613l39.774 39.774z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M86.177 62v843.75l281.25-281.25h-79.102L142.427 770.173V118.25h675.001V399.5h56.25V62z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M733.052 512c52.586 0 102.027 20.48 139.212 57.663 37.184 37.186 57.663 86.626 57.663 139.212s-20.48 102.027-57.663 139.212c-37.186 37.184-86.626 57.663-139.212 57.663s-102.027-20.48-139.212-57.663c-37.184-37.186-57.663-86.626-57.663-139.212s20.48-102.027 57.663-139.212C631.026 532.479 680.466 512 733.052 512m0-56.25c-139.798 0-253.125 113.327-253.125 253.125S593.254 962 733.052 962s253.125-113.327 253.125-253.125S872.85 455.75 733.052 455.75z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconshenqing.defaultProps = {
  size: 18,
};

Iconshenqing = React.memo ? React.memo(Iconshenqing) : Iconshenqing;

export default Iconshenqing;
