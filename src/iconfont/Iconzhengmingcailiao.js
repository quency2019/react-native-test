/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzhengmingcailiao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.2 0H229.181c-56.076 0-102.4 46.324-102.4 104.838v814.324c0 56.076 46.324 102.4 102.4 102.4H819.2c56.076 0 102.4-46.324 102.4-102.4V104.838C924.038 46.324 877.714 0 819.2 0zM216.99 156.038c0-21.943 19.505-41.448 41.448-41.448h277.943c21.943 0 41.448 19.505 41.448 41.448v4.876c0 21.943-19.505 41.448-41.448 41.448H258.438c-21.943 0-41.448-19.505-41.448-41.448v-4.876z m0 158.476c0-21.943 19.505-41.447 41.448-41.447h533.943c21.943 0 41.448 19.504 41.448 41.447v4.876c0 21.943-19.505 41.448-41.448 41.448H258.438c-21.943 0-41.448-19.505-41.448-41.448v-4.876z m0 146.286v-4.876c0-21.943 19.505-41.448 41.448-41.448h204.8c21.943 0 41.448 19.505 41.448 41.448v4.876c0 21.943-19.505 41.448-41.448 41.448h-204.8c-21.943 0-41.448-19.505-41.448-41.448z m429.105 487.619c-114.59 0-207.238-92.648-207.238-207.238s92.648-207.238 207.238-207.238S853.333 626.59 853.333 741.18s-92.647 207.238-207.238 207.238z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M646.095 621.714l34.134 73.143 80.457 9.753-58.515 56.076 14.629 78.019-70.705-36.572-70.705 36.572 12.191-78.02-56.076-56.075 78.019-9.753z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconzhengmingcailiao.defaultProps = {
  size: 18,
};

Iconzhengmingcailiao = React.memo ? React.memo(Iconzhengmingcailiao) : Iconzhengmingcailiao;

export default Iconzhengmingcailiao;
