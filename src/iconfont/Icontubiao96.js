/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icontubiao96 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M476.643748 675.452699c-98.001011 0.021489-195.997929 0.152473-294.000987 0.415462-40.005133 0.079818-56.921407 17.916045-57.437154 57.248865-0.24764 18.387789-0.048095 36.767392-0.048095 57.229422l519.380084 0C573.368696 777.99105 512.708128 735.005027 476.643748 675.452699z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M309.726134 533.556968c-3.010567 3.804652-15.137769 17.36346-17.600867 20.773116-12.019755 16.561188-15.185864 42.651402-10.540054 58.58428 6.578836 22.432918 29.04757 24.982998 45.744857 26.638707 38.60525 3.88447 77.859275 1.279133 116.868731 1.279133 5.022387 0 10.044774-0.010233 15.066137-0.025583-11.585873-28.514427-17.983583-59.690474-17.983583-92.364641 0-118.925576 84.549651-218.096227 196.815551-240.701061-7.977695-44.906769-31.861662-87.058798-70.106708-117.703749-77.939093-62.557778-191.222159-56.773028-261.350356 13.227256-76.19231 76.044954-63.860447 201.539132 3.961218 286.533922C326.254575 509.36908 319.114968 521.744945 309.726134 533.556968z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M161.630191 819.051211 160.946622 819.051211 160.946622 877.315196 161.630191 877.315196 727.141942 877.315196 727.814254 877.315196 727.814254 819.051211 727.141942 819.051211Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M690.895413 340.473415c-115.207905 0-208.601992 93.39511-208.601992 208.601992s93.394087 208.601992 208.601992 208.601992c115.206882 0 208.601992-93.39511 208.601992-208.601992S806.102295 340.473415 690.895413 340.473415zM789.016151 628.732631c0 10.971889-8.894577 19.86749-19.86749 19.86749l-156.509567 0c-10.971889 0-19.86749-8.894577-19.86749-19.86749l0-159.313425c0-10.971889 8.894577-19.86749 19.86749-19.86749l156.509567 0c10.972912 0 19.86749 8.894577 19.86749 19.86749L789.016151 628.732631zM767.636215 490.26293c0-10.971889-8.894577-19.86749-19.86749-19.86749l-113.74867 0c-10.971889 0-19.86749 8.894577-19.86749 19.86749l0 116.9025c0 10.972912 8.894577 19.86749 19.86749 19.86749L747.768725 627.03292c10.972912 0 19.86749-8.894577 19.86749-19.86749L767.636215 490.26293zM750.291175 507.189438c0 6.386454-5.177929 11.56336-11.564383 11.56336l-95.66378 0c-6.386454 0-11.56336-5.176906-11.56336-11.56336l0 0c0-6.386454 5.176906-11.564383 11.56336-11.564383l95.66378 0C745.113245 495.626078 750.291175 500.802984 750.291175 507.189438L750.291175 507.189438zM750.291175 546.086329c0 6.386454-5.177929 11.56336-11.564383 11.56336l-95.66378 0c-6.386454 0-11.56336-5.176906-11.56336-11.56336l0 0c0-6.386454 5.176906-11.56336 11.56336-11.56336l95.66378 0C745.113245 534.521946 750.291175 539.699875 750.291175 546.086329L750.291175 546.086329zM750.291175 586.034157c0 6.386454-5.177929 11.56336-11.564383 11.56336l-95.66378 0c-6.386454 0-11.56336-5.176906-11.56336-11.56336l0 0c0-6.386454 5.176906-11.564383 11.56336-11.564383l95.66378 0C745.113245 574.469773 750.291175 579.647703 750.291175 586.034157L750.291175 586.034157z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

Icontubiao96.defaultProps = {
  size: 18,
};

Icontubiao96 = React.memo ? React.memo(Icontubiao96) : Icontubiao96;

export default Icontubiao96;