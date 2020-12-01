/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconxianshang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1097 1024" width={size} height={size} {...rest}>
      <Path
        d="M605.184 737.792v84.992H732.16a42.391 42.391 0 0 1 42.496 42.496 42.391 42.391 0 0 1-42.496 42.496H365.056a42.391 42.391 0 0 1-42.496-42.496 42.391 42.391 0 0 1 42.496-42.496h126.976v-84.992H181.248a56.158 56.158 0 0 1-56.32-56.32V173.056a56.158 56.158 0 0 1 56.32-56.32h734.72a56.158 56.158 0 0 1 56.32 56.32v508.416a56.158 56.158 0 0 1-56.32 56.32H605.184zM266.24 314.368c-15.36 0-28.16 12.8-28.16 28.16s12.8 28.16 28.16 28.16h84.992c15.36 0 28.16-12.8 28.16-28.16s-12.8-28.16-28.16-28.16H266.24z m197.632 0c-15.36 0-28.16 12.8-28.16 28.16s12.8 28.16 28.16 28.16h282.624c15.36 0 28.16-12.8 28.16-28.16s-12.8-28.16-28.16-28.16H463.872zM266.24 512c-15.36 0-28.16 12.8-28.16 28.16s12.8 28.16 28.16 28.16h565.248c15.36 0 28.16-12.8 28.16-28.16s-12.8-28.16-28.16-28.16H266.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxianshang.defaultProps = {
  size: 18,
};

Iconxianshang = React.memo ? React.memo(Iconxianshang) : Iconxianshang;

export default Iconxianshang;
