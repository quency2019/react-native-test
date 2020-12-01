/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconshenfenrenzheng = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M770.304 952.32a211.3024 211.3024 0 0 1-83.8144-16.896 215.8592 215.8592 0 0 1-115.5072-115.456 215.04 215.04 0 0 1 46.4384-236.288 221.5936 221.5936 0 0 1 69.0688-46.08 216.4736 216.4736 0 0 1 167.68 0 212.0704 212.0704 0 0 1 114.432 114.432 216.5248 216.5248 0 0 1 0 167.68 221.6448 221.6448 0 0 1-46.08 69.0688A213.9136 213.9136 0 0 1 770.304 952.32zM616.3456 438.6816q-4.1984 16.896-8.448 30.72a199.2704 199.2704 0 0 1-10.5472 23.7056 61.44 61.44 0 0 1-13.7216 18.432 41.8816 41.8816 0 0 0-13.2096 15.8208 144.9472 144.9472 0 0 0-6.3488 17.408q-2.6112 8.96-5.7856 18.432a64.4608 64.4608 0 0 1-10.5472 18.9952 263.5776 263.5776 0 0 0-53.2992 118.1184 218.624 218.624 0 0 0-2.6112 54.3232 316.5184 316.5184 0 0 0 8.448 52.1728 243.1488 243.1488 0 0 0 12.6464 39.5264 190.8736 190.8736 0 0 0 24.7808 42.1888 246.8352 246.8352 0 0 0 41.6768 42.1888 344.7296 344.7296 0 0 0 63.2832 39.5264q-25.344 5.12-59.0336 9.5232A1514.4448 1514.4448 0 0 1 418.0992 988.16q-27.392 0-63.7952-2.0992t-74.8544-5.12q-38.0416-3.1232-75.9296-7.3728-34.3552-3.84-68.5568-9.0112-31.1296-4.7616-52.736-10.24c-14.3872-3.5328-23.3984-6.7072-26.88-9.472q-9.472-8.448-14.7456-46.9504t3.1744-100.7104q5.12-34.816 27.9552-53.2992a172.7488 172.7488 0 0 1 53.2992-28.9792q31.5392-10.8544 63.7952-19.5072A215.9616 215.9616 0 0 0 247.2448 670.72a164.1472 164.1472 0 0 0 30.72-23.7056 66.2016 66.2016 0 0 0 14.7456-22.6816 70.2976 70.2976 0 0 0 4.2496-24.2688q0-12.6464-1.0752-27.4432a53.2992 53.2992 0 0 0-15.36-34.7648q-13.6192-13.056-27.9552-25.344a52.224 52.224 0 0 1-14.7456-18.9952 231.7312 231.7312 0 0 1-10.5472-24.2688 175.6672 175.6672 0 0 1-8.448-30.72 48.5888 48.5888 0 0 1-13.6704-6.3488A70.4 70.4 0 0 1 193.4848 419.84a85.504 85.504 0 0 1-11.6224-25.6 68.0448 68.0448 0 0 1-3.6864-29.5424 79.2576 79.2576 0 0 1 5.7856-23.1936 62.464 62.464 0 0 1 11.5712-20.0192 612.8128 612.8128 0 0 1 4.1984-71.68A582.8096 582.8096 0 0 1 212.992 184.32a180.6336 180.6336 0 0 1 29.0304-62.208 207.9744 207.9744 0 0 1 40.6016-43.2128 189.44 189.44 0 0 1 44.8512-26.368A209.152 209.152 0 0 1 373.76 39.5264 284.2112 284.2112 0 0 1 418.0992 35.84 217.4976 217.4976 0 0 1 471.04 42.1888a237.9776 237.9776 0 0 1 46.9504 16.896 216.6784 216.6784 0 0 1 38.5024 23.7056 153.6 153.6 0 0 1 27.1872 26.88 200.4992 200.4992 0 0 1 35.328 67.4816 545.0752 545.0752 0 0 1 16.3328 69.5808 460.8 460.8 0 0 1 4.2496 75.8272 46.08 46.08 0 0 1 10.6496 12.8 47.1552 47.1552 0 0 1 6.3488 16.8448 81.92 81.92 0 0 1 0 26.368 85.504 85.504 0 0 1-8.448 31.6416 62.7712 62.7712 0 0 1-13.7216 17.92 52.3776 52.3776 0 0 1-18.0736 10.5472z m130.7648 335.7696l-68.9152-68.9152a32.4608 32.4608 0 0 0-46.08 46.08l91.8528 92.16a32.4608 32.4608 0 0 0 46.08 0l137.8304-137.8304a32.512 32.512 0 1 0-46.08-46.08z"
        fill={getIconColor(color, 0, '#FF796B')}
      />
    </Svg>
  );
};

Iconshenfenrenzheng.defaultProps = {
  size: 18,
};

Iconshenfenrenzheng = React.memo ? React.memo(Iconshenfenrenzheng) : Iconshenfenrenzheng;

export default Iconshenfenrenzheng;