/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconumidd17 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.7008 669.525333L938.7008 249.412267c0-90.555733-73.5232-164.078933-164.1472-164.078933L249.378133 85.333333c-90.555733 0-164.078933 73.48906699-164.078933 164.078933l0 525.2096c0 90.555733 73.454933 164.078933 164.07893301 164.078933l525.20959999 0c80.725333 0 147.8656-58.368 161.553067-135.099733-43.52-18.8416-232.106667-100.283733-330.376533-147.182933-74.786133 90.589867-153.088 144.930133-271.121067 144.930133s-196.81279999-72.704-187.357867-161.655467c6.2464-58.402133 46.2848-153.9072 220.296533-137.5232 91.682133 8.6016 133.666133 25.736533 208.418133 50.414933 19.3536-35.4304 35.4304-74.513067 47.616-116.0192L292.0448 436.565333l0-32.8704 164.0448 0 0-58.9824L256 344.712533l1e-8-36.181333 200.12373299 0L456.123733 223.3344c0 0 1.809067-13.312 16.520533-13.31200001l82.056533 1e-8 0 98.474667 213.333333 0 0 36.181333-213.333333 1e-8 0 58.98239999 174.045867 0c-16.00853301 65.1264-40.277333 124.962133-70.690133 177.220267C708.608 599.176533 938.7008 669.525333 938.7008 669.525333L938.7008 669.525333 938.7008 669.525333 938.7008 669.525333zM321.57013299 744.994133c-124.7232 0-144.452267-78.7456-137.83039999-111.65013299 6.5536-32.733867 42.666667-75.502933 112.0256-75.50293301 79.6672 0 151.04 20.445867 236.714667 62.088533C472.302933 698.333867 398.370133 744.994133 321.57013299 744.994133L321.57013299 744.994133 321.57013299 744.994133zM321.57013299 744.994133"
        fill={getIconColor(color, 0, '#1296db')}
      />
    </Svg>
  );
};

Iconumidd17.defaultProps = {
  size: 18,
};

Iconumidd17 = React.memo ? React.memo(Iconumidd17) : Iconumidd17;

export default Iconumidd17;
