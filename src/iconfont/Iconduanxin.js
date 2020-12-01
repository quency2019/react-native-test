/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconduanxin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1550 1024" width={size} height={size} {...rest}>
      <Path
        d="M1054.99606497 796.07142108H381.01092741a28.90407153 28.90407153 0 0 1 0-57.80814303h674.04294537a73.24291699 73.24291699 0 0 0 71.45086458-65.90128279l32.37256014-368.81595128a56.24732301 56.24732301 0 0 0-14.1051869-43.35610699 55.43800909 55.43800909 0 0 0-41.33282219-17.34244315H550.09974499a87.57933627 87.57933627 0 0 0-62.14375338 40.46569988 28.90407153 28.90407153 0 1 1-47.92295089-32.31475174 142.78611298 142.78611298 0 0 1 109.83547189-65.95909117h553.28173503a112.14779685 112.14779685 0 0 1 112.95711137 123.53600123l-32.37256016 368.98937588a132.14941472 132.14941472 0 0 1-128.96996685 118.50669316z"
        fill={getIconColor(color, 0, '#1AA679')}
      />
      <Path
        d="M795.61092743 569.92596598a28.90407153 28.90407153 0 0 1-18.38298944-6.59012809L451.42124512 295.27947967a28.90407153 28.90407153 0 0 1 36.76597887-44.62788626l308.57986651 253.95117134 353.7280259-255.04952662a28.90407153 28.90407153 0 0 1 33.75995561 46.88240401L812.49090522 564.43419257a28.44160615 28.44160615 0 0 1-16.87997779 5.49177341zM488.36064858 424.01821354H353.66767532a28.90407153 28.90407153 0 1 1 0-57.80814304H488.36064858a28.90407153 28.90407153 0 1 1 0 57.80814304z m134.23050728 120.64559414H320.71703425a28.90407153 28.90407153 0 1 1 0-57.80814304h302.0475462a28.90407153 28.90407153 0 1 1 0 57.80814304z m99.25658143 121.39710026h-329.50641389a28.90407153 28.90407153 0 1 1-1e-8-57.80814303h329.5064139a28.90407153 28.90407153 0 1 1 0 57.80814303z"
        fill={getIconColor(color, 1, '#1AA679')}
      />
    </Svg>
  );
};

Iconduanxin.defaultProps = {
  size: 18,
};

Iconduanxin = React.memo ? React.memo(Iconduanxin) : Iconduanxin;

export default Iconduanxin;
