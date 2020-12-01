/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshuju2 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.56 391.14c34.83 0 63.09 28.26 63.09 63.09V874.6c0 34.83-28.26 63.09-63.09 63.09h-84.04c-34.83 0-63.1-28.26-63.1-63.09V454.15c0-34.83 28.26-63.1 63.1-63.1h84.04v0.09z m-588.55 84.04c34.83 0 63.09 28.26 63.09 63.09v336.25c0 34.83-28.26 63.1-63.09 63.1h-84.04c-34.83 0-63.09-28.26-63.09-63.1V538.19c0-34.83 28.26-63.1 63.09-63.1h84.04v0.09z m294.27 84.04c34.83 0 63.09 28.26 63.09 63.09v252.21c0 34.83-28.26 63.1-63.09 63.1h-84.04c-34.83 0-63.1-28.26-63.1-63.1V622.31c0-34.83 28.26-63.09 63.1-63.09h84.04z m0 0M776.91 149.9l-49.63 0.33c-17.38 0.09-31.59-13.88-31.75-31.34-0.17-17.29 13.88-31.5 31.26-31.67l126.51-0.92c8.15-0.08 16.3 3 22.53 9.23 3.08 3.08 5.4 6.65 6.9 10.39 1.41 3.32 2.33 7.48 2.33 11.89V244.5c0 17.38-14.13 31.51-31.5 31.51-17.37 0-31.51-14.13-31.51-31.51v-50.54L539.58 476.42c-9.23 9.23-23.19 11.81-35.08 6.48L126.11 314.82c-15.88-7.07-23.11-25.69-16.04-41.65 7.06-15.88 25.69-23.11 41.65-16.04l358.53 159.35L776.91 149.9z m0 0"
        fill={getIconColor(color, 0, '#5490EF')}
      />
    </Svg>
  );
};

Iconshuju2.defaultProps = {
  size: 18,
};

Iconshuju2 = React.memo ? React.memo(Iconshuju2) : Iconshuju2;

export default Iconshuju2;