/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconguanbi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M846.841 799.024l-284.839-284.839 284.839-284.96c13.714-13.714 13.714-36.045 0-49.759s-36.045-13.714-49.759 0l-284.839 284.839-284.96-284.839c-13.714-13.714-36.045-13.714-49.759 0s-13.714 36.045 0 49.759l284.96 284.96-284.96 284.839c-13.714 13.714-13.714 36.045 0 49.759s36.045 13.714 49.759 0l284.96-284.96 284.96 284.96c13.714 13.714 36.045 13.714 49.759 0 13.593-13.714 13.593-36.045-0.122-49.759z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconguanbi.defaultProps = {
  size: 18,
};

Iconguanbi = React.memo ? React.memo(Iconguanbi) : Iconguanbi;

export default Iconguanbi;
