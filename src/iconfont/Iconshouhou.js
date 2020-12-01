/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshouhou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M684.373333 52.906667c-34.133333 0-64.853333 17.066667-81.92 42.666666l-27.306666-32.426666c-13.653333-15.36-37.546667-18.773333-52.906667-5.12l-133.12 109.226666c-15.36 13.653333-18.773333 37.546667-5.12 52.906667l66.56 78.506667c13.653333 15.36 37.546667 18.773333 52.906667 5.12l104.106666-87.04c18.773333 22.186667 46.08 35.84 76.8 35.84 56.32 0 100.693333-46.08 100.693334-100.693334s-44.373333-98.986667-100.693334-98.986666z"
        fill={getIconColor(color, 0, '#FFB636')}
      />
      <Path
        d="M909.653333 797.013333H114.346667c-18.773333 0-34.133333-15.36-34.133334-34.133333V170.666667c0-18.773333 15.36-34.133333 34.133334-34.133334h797.013333c18.773333 0 34.133333 15.36 34.133333 34.133334v590.506666c-1.706667 20.48-17.066667 35.84-35.84 35.84z"
        fill={getIconColor(color, 1, '#0090FF')}
      />
      <Path
        d="M610.986667 506.88h-80.213334v-34.133333h80.213334c10.24 0 18.773333-8.533333 18.773333-18.773334 0-10.24-8.533333-18.773333-18.773333-18.773333h-80.213334v-10.24l61.44-52.906667c8.533333-6.826667 8.533333-18.773333 1.706667-27.306666s-18.773333-8.533333-27.306667-1.706667L512 390.826667l-56.32-47.786667c-8.533333-6.826667-20.48-5.12-27.306667 1.706667-6.826667 8.533333-5.12 20.48 1.706667 27.306666l61.44 52.906667v10.24h-80.213333c-10.24 0-18.773333 8.533333-18.773334 18.773333 0 10.24 8.533333 18.773333 18.773334 18.773334h80.213333v34.133333h-80.213333c-10.24 0-18.773333 8.533333-18.773334 18.773333 0 10.24 8.533333 18.773333 18.773334 18.773334h80.213333v64.853333c0 10.24 8.533333 18.773333 18.773333 18.773333s18.773333-8.533333 18.773334-18.773333V546.133333h80.213333c10.24 0 18.773333-8.533333 18.773333-18.773333 1.706667-11.946667-6.826667-20.48-17.066666-20.48z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M925.013333 856.746667c0-1.706667 1.706667-1.706667 1.706667-3.413334v-3.413333-1.706667-1.706666-3.413334c0-1.706667 0-1.706667-1.706667-3.413333v-1.706667l-1.706666-1.706666c0-1.706667-1.706667-1.706667-1.706667-3.413334-1.706667-1.706667-1.706667-1.706667-3.413333-1.706666s-1.706667-1.706667-3.413334-1.706667h-3.413333H119.466667c-10.24 0-18.773333 8.533333-18.773334 18.773333 0 10.24 8.533333 18.773333 18.773334 18.773334h716.8L800.426667 887.466667c-8.533333 5.12-11.946667 17.066667-6.826667 25.6s17.066667 11.946667 25.6 6.826666l98.986667-56.32 1.706666-1.706666c1.706667 0 1.706667-1.706667 3.413334-1.706667 0-1.706667 0-1.706667 1.706666-3.413333z"
        fill={getIconColor(color, 3, '#6EC4FF')}
      />
    </Svg>
  );
};

Iconshouhou.defaultProps = {
  size: 18,
};

Iconshouhou = React.memo ? React.memo(Iconshouhou) : Iconshouhou;

export default Iconshouhou;