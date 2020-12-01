/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconanquan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M862.436 200.249h-34.134s-79.644-2.276-159.289-34.133c-81.92-34.134-136.533-72.818-136.533-72.818L512 77.368l-20.48 13.654s-54.613 38.685-136.533 72.818c-79.645 34.133-159.29 34.133-159.29 34.133h-34.133v359.538c0 179.769 227.556 370.916 350.436 370.916S862.436 737.28 862.436 557.51V200.25zM762.31 359.538L509.724 614.4c-6.826 6.827-15.928 9.102-25.03 9.102-6.827 0-15.93-2.275-20.48-6.826L293.546 480.142c-13.654-11.378-18.205-34.133-4.551-47.786 11.377-13.654 34.133-18.205 47.786-4.552l147.911 118.33L716.8 314.026c13.653-13.654 34.133-13.654 47.787 0s11.377 31.857-2.276 45.51z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconanquan.defaultProps = {
  size: 18,
};

Iconanquan = React.memo ? React.memo(Iconanquan) : Iconanquan;

export default Iconanquan;
