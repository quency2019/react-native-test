/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconbaozhang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#37ABE3')}
      />
      <Path
        d="M822.96832 676.94592s0 119.11168-146.39104 161.792C511.71328 886.784 512 915.33312 512 915.33312s0.28672-28.672-164.57728-76.61568c-146.39104-42.63936-146.39104-161.792-146.39104-161.792V237.056s0 27.46368 146.39104-15.03232C512.28672 173.8752 512 108.66688 512 108.66688s0 64.18432 164.72064 113.33632c145.96096 43.52 146.24768 15.03232 146.24768 15.03232v439.9104z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M822.96832 236.38016s-0.28672 25.02656-120.58624-7.68L209.92 722.14528c14.336 38.33856 49.54112 91.15648 136.9088 116.49024 165.0688 48.18944 164.78208 76.6976 164.78208 76.6976s-0.28672-28.672 164.78208-76.6976c146.57536-42.68032 146.57536-161.91488 146.57536-161.91488v-440.32z"
        fill={getIconColor(color, 2, '#B1DFF5')}
      />
      <Path
        d="M869.21216 286.16704q-12.82048-115.4048-128.24576-128.24576 115.4048-12.82048 128.24576-128.24576 12.82048 115.42528 128.16384 128.24576-115.34336 12.84096-128.16384 128.24576z"
        fill={getIconColor(color, 3, '#53C2ED')}
      />
      <Path
        d="M861.02016 277.97504q-12.82048-115.4048-128.24576-128.24576 115.4048-12.82048 128.24576-128.24576 12.82048 115.42528 128.16384 128.24576-115.34336 12.84096-128.16384 128.24576z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <Path
        d="M311.54176 520.86784q50.46272-75.32544 78.336-182.66112l27.87328 8.192q-15.44192 49.70496-33.52576 93.02016v265.99424h-27.11552V496.39424a611.77856 611.77856 0 0 1-33.8944 55.296q-5.26336-15.74912-11.6736-30.8224z m132.1984-166.0928h210.14528v141.98784h-28.672v-14.336h-63.22176v50.87232h124.27264v25.6h-102.4Q618.496 616.448 689.27488 649.66656q-11.6736 16.19968-18.82112 27.87328a287.10912 287.10912 0 0 1-108.544-115.99872v145.75616H534.528v-147.2512q-45.568 82.10432-114.11456 125.0304-8.76544-10.5472-21.05344-22.97856a295.58784 295.58784 0 0 0 108.83072-103.19872h-98.73408v-25.6H534.528v-50.83136h-62.17728v16.93696h-28.672v-144.60928z m181.51424 25.23136h-152.90368v77.2096h152.90368v-77.2096z"
        fill={getIconColor(color, 5, '#37ABE3')}
      />
    </Svg>
  );
};

Iconbaozhang.defaultProps = {
  size: 18,
};

Iconbaozhang = React.memo ? React.memo(Iconbaozhang) : Iconbaozhang;

export default Iconbaozhang;
