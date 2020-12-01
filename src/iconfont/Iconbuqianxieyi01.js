/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconbuqianxieyi01 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 224l0 115.68 23.328-41.376C736.896 281.312 751.488 269.344 768 262.528l0-71.04-64-64L704 128l-64-64 0.512 0-64-64L64 0C28.64 0 0 28.672 0 64l0 800c0 35.328 28.64 64 64 64 0 0 274.848 0.672 466.08 0.608L540.192 864 64 864 64 64l480 0 0 117.344C544 204.896 563.104 224 586.656 224L704 224zM664.992 521.472c-7.584 13.472-3.072 30.688 10.048 38.432 13.152 7.776 29.952 3.168 37.536-10.304l100.736-178.752c7.584-13.472 3.072-30.688-10.048-38.464-13.152-7.776-29.952-3.168-37.536 10.304L664.992 521.472zM602.368 820.256c-10.624 18.56-34.4 104.352-22.048 140.576l-10.976 19.168c-3.808 6.592-1.184 15.264 5.728 19.36 1.536 0.896 3.136 1.536 4.736 1.856 5.76 1.152 11.712-1.216 14.656-6.368l11.616-20.288c36.448-8.512 94.592-66.4 107.296-88.64l137.472-243.808-111.136-65.632L602.368 820.256zM941.376 349.152c-28.448-17.184-67.584-9.6-82.592 16.096L758.048 544l111.04 65.664 100.736-178.752C984.32 405.184 969.856 366.304 941.376 349.152zM383.84 608l0.32 0C401.728 608 416 593.76 416 576.16L416 480l96 0c17.664 0 32-14.336 32-32s-14.336-32-32-32l-96 0L416 319.84C416 302.24 401.728 288 384.16 288l-0.32 0C366.24 288 352 302.24 352 319.84L352 416 256 416c-17.664 0-32 14.336-32 32s14.336 32 32 32l96 0 0 96.16C352 593.76 366.24 608 383.84 608z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbuqianxieyi01.defaultProps = {
  size: 18,
};

Iconbuqianxieyi01 = React.memo ? React.memo(Iconbuqianxieyi01) : Iconbuqianxieyi01;

export default Iconbuqianxieyi01;