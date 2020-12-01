/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconfalv = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M546.592 291.616l36.208-36.208 99.568 99.552-36.208 36.208zM537.6 336c-14.4 17.6-32 43.2-51.2 60.8s-43.2 36.8-59.2 49.6l64 64c12.8-16 32-40 51.2-59.2 16-17.6 43.2-36.8 59.2-49.6l-64-65.6zM346.496 493.424l36.208-36.208 99.552 99.552-36.208 36.208zM579.2 462.4l-1.6 1.6-20.8 20.8c-1.6 0-1.6 1.6-1.6 1.6v3.2l201.6 201.6c8 6.4 20.8 6.4 27.2 0 8-6.4 8-17.6 0-27.2L579.2 462.4z"
        fill={getIconColor(color, 0, '#348CE5')}
      />
      <Path
        d="M684.8 30.4H355.2c-176 0-318.4 142.4-318.4 318.4v308.8c0 176 142.4 318.4 318.4 318.4h646.4V348.8c1.6-176-140.8-318.4-316.8-318.4zM260.8 692.8h304c9.6 0 17.6 8 17.6 17.6s-8 17.6-17.6 17.6h-304c-8 0-16-8-17.6-17.6 0-9.6 8-17.6 17.6-17.6z m336 104H232c-9.6 0-17.6-8-17.6-17.6s8-17.6 17.6-17.6h364.8c8 0 16 8 17.6 17.6-1.6 9.6-6.4 17.6-17.6 17.6z m212.8-78.4c-9.6 9.6-24 16-38.4 16-14.4 0-28.8-6.4-38.4-16L531.2 518.4c-6.4 6.4-9.6 12.8-14.4 17.6 9.6 12.8 9.6 30.4-1.6 43.2l-46.4 46.4c-6.4 6.4-14.4 9.6-22.4 9.6-8 0-16-4.8-22.4-9.6l-112-112c-6.4-6.4-9.6-14.4-9.6-22.4 0-8 4.8-16 9.6-22.4l46.4-46.4c12.8-12.8 30.4-12.8 43.2-1.6 16-9.6 43.2-30.4 60.8-49.6 17.6-17.6 36.8-44.8 49.6-60.8-6.4-6.4-8-12.8-8-20.8s4.8-16 9.6-22.4l46.4-46.4c6.4-6.4 14.4-9.6 22.4-9.6 8 0 16 4.8 22.4 9.6l112 112c6.4 6.4 8 14.4 8 22.4 0 8-4.8 16-9.6 22.4l-46.4 46.4c-6.4 6.4-14.4 9.6-22.4 9.6-8 0-14.4-4.8-20.8-8-4.8 4.8-12.8 8-17.6 14.4l201.6 201.6c22.4 22.4 22.4 56 0 76.8z"
        fill={getIconColor(color, 1, '#348CE5')}
      />
    </Svg>
  );
};

Iconfalv.defaultProps = {
  size: 18,
};

Iconfalv = React.memo ? React.memo(Iconfalv) : Iconfalv;

export default Iconfalv;