/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconsearch = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M886.4 841.6l-192-192c44.8-54.4 73.6-124.8 73.6-201.6 0-176-144-320-320-320S128 272 128 448s144 320 320 320c76.8 0 147.2-25.6 201.6-73.6l192 192c6.4 6.4 16 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8zM448 704c-140.8 0-256-115.2-256-256s115.2-256 256-256 256 115.2 256 256-115.2 256-256 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsearch.defaultProps = {
  size: 18,
};

Iconsearch = React.memo ? React.memo(Iconsearch) : Iconsearch;

export default Iconsearch;
