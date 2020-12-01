/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconhezuogongyingshangyegongxiangxianxing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M625.777778 681.500444l-112.014222 64.654223L398.222222 679.452444V938.666667H113.777778V540.444444a142.222222 142.222222 0 0 1 284.444444 0v73.301334l115.541334 66.730666L625.777778 615.793778V540.444444a142.222222 142.222222 0 0 1 284.444444 0v398.222223H625.777778v-257.166223zM170.666667 881.777778h170.666666V540.444444a85.333333 85.333333 0 0 0-170.666666 0v341.333334z m512 0h170.666666V540.444444a85.333333 85.333333 0 0 0-170.666666 0v341.333334z m85.333333-512a142.222222 142.222222 0 1 1 0-284.444445 142.222222 142.222222 0 0 1 0 284.444445zM256 369.777778A142.222222 142.222222 0 1 1 256 85.333333a142.222222 142.222222 0 0 1 0 284.444445z m0-56.888889a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z m512 0a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconhezuogongyingshangyegongxiangxianxing.defaultProps = {
  size: 18,
};

Iconhezuogongyingshangyegongxiangxianxing = React.memo ? React.memo(Iconhezuogongyingshangyegongxiangxianxing) : Iconhezuogongyingshangyegongxiangxianxing;

export default Iconhezuogongyingshangyegongxiangxianxing;
