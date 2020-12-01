/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icondianhua = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M634.487467 1022.976c-6.178133 0-10.308267 0-16.4864-2.082133-84.548267-12.373333-218.606933-65.979733-383.573334-243.336534C90.0608 618.769067 13.755733 466.158933 28.194133 367.172267c16.503467-101.034667 156.740267-162.9184 162.9184-164.983467 12.373333-6.178133 26.811733 0 32.989867 10.325333l119.620267 202.0864c4.113067 6.1952 4.113067 14.4384 2.048 22.698667-2.048 8.2432-8.2432 12.356267-14.421334 16.4864 0 0-14.4384 6.1952-18.568533 26.794667-4.113067 20.650667 0 66.013867 72.192 150.562133 47.428267 55.671467 94.856533 86.613333 136.106667 86.613333 39.168 2.048 61.866667-22.698667 63.914666-22.698666 10.325333-10.308267 24.746667-10.308267 35.072-2.048l187.648 142.2848c10.325333 8.260267 14.4384 22.698667 8.260267 33.006933 0 4.113067-76.305067 154.658133-181.486933 154.658133zM193.194667 259.925333c-39.185067 22.698667-103.1168 65.9968-109.294934 113.442134-10.308267 63.914667 35.054933 193.8432 191.778134 367.069866 152.610133 167.031467 274.2784 214.4768 350.583466 226.850134 53.623467 8.2432 107.229867-61.866667 131.976534-105.181867l-152.593067-115.490133a126.685867 126.685867 0 0 1-82.500267 24.746666c-59.8016-2.048-117.538133-37.12-177.339733-107.229866-68.061867-80.418133-94.8736-146.432-82.500267-200.021334 4.130133-20.650667 14.4384-35.072 24.746667-45.397333L193.194667 259.959467z m773.341866 325.8368c-14.4384 0-24.746667-10.308267-26.811733-22.6816-2.065067-16.4864-4.130133-32.989867-8.260267-49.493333-2.048-14.4384 6.1952-28.859733 20.6336-30.9248 14.4384-2.065067 28.859733 6.178133 30.9248 20.616533 4.130133 18.568533 6.1952 35.054933 8.260267 53.623467 2.048 14.4384-8.260267 28.859733-22.698667 30.9248 0-2.048-2.048-2.048-2.048-2.048z m-41.250133-160.853333c-10.308267 0-20.616533-6.178133-24.746667-16.4864s-8.2432-20.6336-12.373333-28.8768c-20.616533-45.3632-49.493333-90.743467-80.4352-129.911467-74.24-90.743467-169.096533-158.805333-278.391467-195.925333-14.4384-4.113067-20.616533-20.616533-16.503466-35.054933 4.130133-14.4384 20.6336-20.616533 35.054933-16.503467a672.324267 672.324267 0 0 1 303.1552 212.411733c35.054933 43.3152 63.931733 90.743467 88.6784 140.2368 4.113067 10.308267 10.308267 20.616533 14.4384 32.989867 6.178133 14.4384-2.065067 28.8768-14.4384 35.072-8.260267 2.048-12.373333 2.048-14.4384 2.048z m-123.733333 156.740267c-12.373333 0-24.746667-8.260267-26.794667-22.698667a437.469867 437.469867 0 0 0-94.890667-208.2816c-49.493333-59.8016-113.408-107.229867-185.582933-136.106667-14.4384-6.178133-20.6336-20.616533-14.4384-35.054933 6.178133-14.4384 20.616533-20.616533 35.054933-14.4384a519.406933 519.406933 0 0 1 206.216534 152.610133c55.688533 68.061867 90.743467 148.48 107.246933 233.028267 2.048 14.4384-8.260267 28.8768-22.698667 30.941867h-4.113066z m-167.048534-8.260267c-12.373333 0-22.6816-8.2432-26.794666-18.551467a265.591467 265.591467 0 0 0-53.623467-101.034666c-24.746667-30.941867-55.688533-55.688533-90.743467-74.24-12.373333-6.1952-18.551467-22.698667-10.308266-37.137067 6.1952-12.373333 22.698667-18.551467 37.12-10.308267 41.250133 22.698667 76.288 51.541333 107.229866 88.6784 28.8768 35.054933 49.493333 76.288 63.931734 119.6032 4.130133 14.4384-4.113067 28.8768-18.551467 32.989867-4.130133-2.048-6.1952 0-8.260267 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondianhua.defaultProps = {
  size: 18,
};

Icondianhua = React.memo ? React.memo(Icondianhua) : Icondianhua;

export default Icondianhua;
