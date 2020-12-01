/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontianjiajiahaowubiankuang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M864 448 512 448 512 96C512 78.08 497.92 64 480 64 462.08 64 448 78.08 448 96L448 448 96 448C78.08 448 64 462.08 64 480 64 497.92 78.08 512 96 512L448 512l0 352C448 881.92 462.08 896 480 896 497.92 896 512 881.92 512 864L512 512l352 0C881.92 512 896 497.92 896 480 896 462.08 881.92 448 864 448z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontianjiajiahaowubiankuang.defaultProps = {
  size: 18,
};

Icontianjiajiahaowubiankuang = React.memo ? React.memo(Icontianjiajiahaowubiankuang) : Icontianjiajiahaowubiankuang;

export default Icontianjiajiahaowubiankuang;
