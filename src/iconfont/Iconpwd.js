/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconpwd = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 592.832a26.944 26.944 0 0 0-26.944 26.944v161.696a26.944 26.944 0 0 0 53.888 0v-161.696a26.944 26.944 0 0 0-26.944-26.944z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M862.304 404.224h-107.776V269.472a242.528 242.528 0 1 0-485.056 0v134.752H161.696a80.832 80.832 0 0 0-80.832 80.832v431.168a80.832 80.832 0 0 0 80.832 80.832h700.64a80.832 80.832 0 0 0 80.832-80.832V485.056a80.832 80.832 0 0 0-80.832-80.832zM323.36 269.472a188.64 188.64 0 1 1 377.28 0v134.752H323.392z m565.888 646.752a26.944 26.944 0 0 1-26.944 26.944H161.664a26.944 26.944 0 0 1-26.944-26.944V485.056c0-14.88 12.064-26.944 26.944-26.944h700.64c14.88 0 26.944 12.064 26.944 26.944z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconpwd.defaultProps = {
  size: 18,
};

Iconpwd = React.memo ? React.memo(Iconpwd) : Iconpwd;

export default Iconpwd;
