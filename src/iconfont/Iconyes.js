/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconyes = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m210.688 348.736L445.056 626.304 322.752 504a48 48 0 1 0-67.904 67.84l156.288 156.288a48 48 0 0 0 67.84 0l311.552-311.488a48 48 0 0 0-67.84-67.904z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconyes.defaultProps = {
  size: 18,
};

Iconyes = React.memo ? React.memo(Iconyes) : Iconyes;

export default Iconyes;
