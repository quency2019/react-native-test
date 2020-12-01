/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshuju = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M835.072 928.768h-163.84v-76.288c0-19.968-16.384-35.84-35.84-35.84H389.12c-19.968 0-35.84 15.872-35.84 35.84v76.288H189.44c-18.432 0-33.28 14.848-33.28 33.28s14.848 33.28 33.28 33.28h645.632c18.432 0 33.28-14.848 33.28-33.28s-14.848-33.28-33.28-33.28zM952.32 28.672H72.192C32.256 28.672 0 60.416 0 100.352v613.888c0 39.936 32.256 72.192 72.192 72.192H952.32c39.424 0 71.68-32.256 71.68-72.192V100.352c0-39.936-32.256-71.68-71.68-71.68z m-656.896 588.8c0 19.968-16.384 35.84-35.84 35.84h-48.64c-19.968 0-35.84-15.872-35.84-35.84v-62.976c0-19.968 16.384-35.84 35.84-35.84h48.64c19.968 0 35.84 16.384 35.84 35.84v62.976z m168.96 0c0 19.968-15.872 35.84-35.84 35.84h-48.64c-19.968 0-35.84-15.872-35.84-35.84V446.976c0-19.968 15.872-35.84 35.84-35.84h48.64c19.968 0 35.84 15.872 35.84 35.84v170.496z m192.512 0c0 19.968-15.872 35.84-35.84 35.84h-48.64c-19.968 0-35.84-15.872-35.84-35.84V230.912c0-19.968 15.872-35.84 35.84-35.84h48.64c19.968 0 35.84 15.872 35.84 35.84v386.56z m192.512 0c0 19.968-15.872 35.84-35.84 35.84h-48.64c-19.968 0-35.84-15.872-35.84-35.84V338.944c0-19.968 15.872-35.84 35.84-35.84h48.64c19.968 0 35.84 16.384 35.84 35.84v278.528z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshuju.defaultProps = {
  size: 18,
};

Iconshuju = React.memo ? React.memo(Iconshuju) : Iconshuju;

export default Iconshuju;
