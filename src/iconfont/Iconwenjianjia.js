/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconwenjianjia = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M46.545455 814.545455c0 51.2 41.890909 93.090909 93.090909 93.090909h744.727272c51.2 0 93.090909-41.890909 93.090909-93.090909V442.181818H46.545455v372.363637zM884.363636 209.454545H465.454545c0-51.2-41.890909-93.090909-93.090909-93.090909H139.636364C88.436364 116.363636 46.545455 158.254545 46.545455 209.454545v139.636364h930.90909v-46.545454c0-51.2-41.890909-93.090909-93.090909-93.09091z"
        fill={getIconColor(color, 0, '#090204')}
      />
    </Svg>
  );
};

Iconwenjianjia.defaultProps = {
  size: 18,
};

Iconwenjianjia = React.memo ? React.memo(Iconwenjianjia) : Iconwenjianjia;

export default Iconwenjianjia;
