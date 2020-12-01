/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconpingtaiguizeCopyCopy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M767.32226563 962h-510.64453126C149.1875 962 62 874.8125 62 767.32226563V256.58984375C62 149.1875 149.1875 62 256.67773437 62h510.73242188C874.8125 62 962 149.1875 962 256.67773437v510.73242188c0 107.40234375-87.1875 194.58984375-194.67773438 194.58984375z"
        fill={getIconColor(color, 0, '#FB9654')}
      />
      <Path
        d="M344.23876953 382.55358886m-91.04919434 1e-8a91.04919434 91.04919434 0 1 0 182.09838868 0 91.04919434 91.04919434 0 1 0-182.09838868 0Z"
        fill={getIconColor(color, 1, '#ffffff')}
      />
      <Path
        d="M344.23876953 641.44641114m-91.04919434-1e-8a91.04919434 91.04919434 0 1 0 182.09838868 0 91.04919434 91.04919434 0 1 0-182.09838868 0Z"
        fill={getIconColor(color, 2, '#ffffff')}
      />
      <Path
        d="M746.91516114 358.57592773H497.58044433c-13.18359375 0-23.97766114-10.79406739-23.97766113-23.97766113s10.79406739-23.97766114 23.97766114-23.97766113H746.83276367c13.18359375 0 23.97766114 10.79406739 23.97766114 23.97766114 0.08239747 13.18359375-10.71166992 23.97766114-23.89526368 23.97766112zM746.91516114 454.48657227H497.58044433c-13.18359375 0-23.97766114-10.79406739-23.97766113-23.97766114s10.79406739-23.97766114 23.97766114-23.97766113H746.83276367c13.18359375 0 23.97766114 10.79406739 23.97766114 23.97766114 0.08239747 13.18359375-10.71166992 23.97766114-23.89526368 23.97766113zM746.91516114 617.46875H497.58044433c-13.18359375 0-23.97766114-10.79406739-23.97766113-23.97766114s10.79406739-23.97766114 23.97766114-23.97766113H746.83276367c13.18359375 0 23.97766114 10.79406739 23.97766114 23.97766114 0.08239747 13.18359375-10.71166992 23.97766114-23.89526368 23.97766113zM746.91516114 713.37939453H497.58044433c-13.18359375 0-23.97766114-10.79406739-23.97766113-23.97766114s10.79406739-23.97766114 23.97766114-23.97766112H746.83276367c13.18359375 0 23.97766114 10.79406739 23.97766114 23.97766113 0.08239747 13.18359375-10.71166992 23.97766114-23.89526368 23.97766113z"
        fill={getIconColor(color, 3, '#ffffff')}
      />
      <Path
        d="M344.23876953 382.55358886m-28.75671387 1e-8a28.75671387 28.75671387 0 1 0 57.51342774 0 28.75671387 28.75671387 0 1 0-57.51342773 0Z"
        fill={getIconColor(color, 4, '#FB9654')}
      />
      <Path
        d="M344.23876953 641.44641114m-28.75671387-1e-8a28.75671387 28.75671387 0 1 0 57.51342774 0 28.75671387 28.75671387 0 1 0-57.51342773 0Z"
        fill={getIconColor(color, 5, '#FB9654')}
      />
    </Svg>
  );
};

IconpingtaiguizeCopyCopy.defaultProps = {
  size: 18,
};

IconpingtaiguizeCopyCopy = React.memo ? React.memo(IconpingtaiguizeCopyCopy) : IconpingtaiguizeCopyCopy;

export default IconpingtaiguizeCopyCopy;