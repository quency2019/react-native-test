/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icongongzuolvli = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M352.4 447.4h183.7c15 0 27.2-12.2 27.2-27.2V267.5c0-15-12.2-27.2-27.2-27.2H331.7c-15 0-27.2 12.2-27.2 27.2l1 141.9c0 32 15 38 46.9 38z m0.6-152.5c0-6 8.6-10.9 14.3-10.9h136.3c5.7 0 10.3 4.9 10.3 10.9V386c0 6-4.6 10.9-10.3 10.9H363.3c-5.7 0-10.3-4.9-10.3-10.9v-91.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M773 101.1H202c-22 0-39.8 17.8-39.8 39.8v689.4c0 26.1 21.2 47.3 47.3 47.3h604.3c26.1 0 47.3-21.2 47.3-47.3V181c-0.1-80-29.1-79.9-88.1-79.9z m9.5 718.9H240.7c-11.5 0-20.9-9.4-20.9-20.9V169.7c0-11.5 9.4-20.9 20.9-20.9h541.8c11.5 0 20.8 9.3 20.8 20.8v629.6c0 11.5-9.3 20.8-20.8 20.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M336.5 577h346c17.9 0 32.5-11.2 32.5-25 0-13.7-14.6-25-32.5-25h-346c-17.9 0-32.5 11.2-32.5 25s14.6 25 32.5 25zM685.5 671h-346c-17.9 0-32.5 11-32.5 24.5s14.6 24.5 32.5 24.5h346c17.9 0 32.5-11 32.5-24.5S703.4 671 685.5 671z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Icongongzuolvli.defaultProps = {
  size: 18,
};

Icongongzuolvli = React.memo ? React.memo(Icongongzuolvli) : Icongongzuolvli;

export default Icongongzuolvli;
