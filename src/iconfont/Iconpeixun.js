/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconpeixun = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.9 1023.9C170.6 1023.9 0 853.2 0 511.9S170.6 0 511.9 0c341.3 0 511.9 170.6 511.9 511.9s-170.6 512-511.9 512z"
        fill={getIconColor(color, 0, '#7CC2E8')}
      />
      <Path
        d="M596.3 1020c275.1-25.9 417.5-184.6 427.1-476.1 0.2-7.5 0.4-15.1 0.5-22.8 0-3.1-287.9-276.8-287.9-276.8L247.2 488.7l237.3 169.5-74.5 39.9 118.2 81.4h-281L596.3 1020z"
        fill={getIconColor(color, 1, '#2F98BC')}
      />
      <Path
        d="M526.5 733c115.7 0 209.4-93.8 209.4-209.4H317C317 639.2 410.8 733 526.5 733zM247.2 744.6h523.6v34.9H247.2z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M270.5 596.6h-12.7v62.1h49.4v-62.1h-11.1v-96.3h486.3l-46.5-256H293.8l-46.6 256h23.3z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconpeixun.defaultProps = {
  size: 18,
};

Iconpeixun = React.memo ? React.memo(Iconpeixun) : Iconpeixun;

export default Iconpeixun;
