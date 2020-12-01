/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconchehui = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 320H320V160a16.032 16.032 0 0 0-16-16c-3.744 0-7.456 1.328-10.416 3.856l-224 192a15.936 15.936 0 0 0 0 24.288l224 192a15.968 15.968 0 0 0 17.104 2.384A16 16 0 0 0 320 544V384h384c105.872 0 192 86.128 192 192s-86.128 192-192 192H352a32 32 0 0 0 0 64h352c141.392 0 256-114.608 256-256s-114.608-256-256-256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconchehui.defaultProps = {
  size: 18,
};

Iconchehui = React.memo ? React.memo(Iconchehui) : Iconchehui;

export default Iconchehui;
