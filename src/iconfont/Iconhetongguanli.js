/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconhetongguanli = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M170.666667 0h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333334-85.333333z m422.272 893.738667l75.093333-39.466667 75.050667 39.466667a19.712 19.712 0 0 0 28.586666-20.778667l-14.336-83.626667 60.714667-59.178666a19.712 19.712 0 0 0-10.922667-33.578667l-83.925333-12.202667-37.546667-76.074666a19.712 19.712 0 0 0-35.328 0l-37.546666 76.074666-83.925334 12.202667a19.712 19.712 0 0 0-10.922666 33.578667l60.757333 59.221333-14.336 83.626667a19.712 19.712 0 0 0 28.586667 20.736zM256 224h518.485333a32 32 0 1 0 0-64H256a32 32 0 0 0 0 64z m0 170.666667h236.330667a32 32 0 0 0 0-64H256a32 32 0 0 0 0 64z"
        fill={getIconColor(color, 0, '#7452BF')}
      />
    </Svg>
  );
};

Iconhetongguanli.defaultProps = {
  size: 18,
};

Iconhetongguanli = React.memo ? React.memo(Iconhetongguanli) : Iconhetongguanli;

export default Iconhetongguanli;
