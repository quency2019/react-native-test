/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconzaizhipeixun = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M618.808 641.576s-20.799-4.497-21.362-21.362v-42.724s71.393-64.085 85.448-150.094c38.226 0 59.587-96.689 21.361-128.732-9.556-45.534 48.346-235.54-192.255-235.54s-182.698 206.308-192.817 235.54c-38.227 32.042-16.865 128.732 21.362 128.732 14.054 85.448 86.009 149.532 86.009 149.532v42.724c0 15.178-21.362 21.361-21.362 21.361-64.085 11.243-342.91 150.095-342.91 277.702v43.285h899.438v-43.286c0-127.045-279.387-267.582-342.91-277.138zM469.276 684.299v-21.362h85.448v42.723l-21.362 21.362h-42.724l-21.362-21.362v-21.362zM447.915 898.477c0-102.874 42.724-128.732 42.724-128.732h42.723s42.724 23.048 42.724 128.732h-128.171z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzaizhipeixun.defaultProps = {
  size: 18,
};

Iconzaizhipeixun = React.memo ? React.memo(Iconzaizhipeixun) : Iconzaizhipeixun;

export default Iconzaizhipeixun;
