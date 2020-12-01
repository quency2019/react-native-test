/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconchangdiankeqianhetongfenpeiguanli = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M721.727885 277.121408v-56.319969a9.471995 9.471995 0 0 0-9.599994-9.406995H254.720141a9.471995 9.471995 0 0 0-9.599995 9.407995v56.319969c0 5.182997 4.351998 9.406995 9.599995 9.406995h457.535749a9.471995 9.471995 0 0 0 9.535995-9.407995z m-467.071744 103.359944a9.471995 9.471995 0 0 0-9.599995 9.407995v56.319969c0 5.183997 4.351998 9.407995 9.599995 9.407995h219.19988a9.471995 9.471995 0 0 0 9.599995-9.407995v-56.319969a9.471995 9.471995 0 0 0-9.599995-9.407995H254.720141z m447.999755 136.191925c-142.143922 0-257.407859 113.599938-257.407859 253.694862S560.447974 1024 702.719896 1024C844.734818 1024 959.999755 910.464062 959.999755 770.368139c0-140.159923-115.199937-253.694861-257.343859-253.694862z m128.06293 379.902793a181.311901 181.311901 0 0 1-128.06293 52.287971c-48.383974 0-93.887949-18.55999-128.12793-52.287971a176.127904 176.127904 0 0 1-52.991971-126.207931c0-47.679974 18.81599-92.542949 52.991971-126.270931a181.311901 181.311901 0 0 1 128.12793-52.223972c48.383974 0 93.886949 18.55999 128.06293 52.223972 34.175981 33.727982 53.055971 78.591957 53.055971 126.270931 0 47.679974-18.87999 92.543949-53.055971 126.207931zM808.702838 681.090188h-52.799971a9.471995 9.471995 0 0 0-7.742996 3.839997l-75.647959 103.166944-27.519985-37.502979a9.471995 9.471995 0 0 0-7.743995-3.839998h-52.543972a9.407995 9.407995 0 0 0-7.743996 14.910991l87.935952 119.871935c3.839998 5.183997 11.519994 5.183997 15.359992 0l136.062926-185.534899a9.343995 9.343995 0 0 0-7.679996-14.911991zM426.240047 911.360062H149.760198V84.482514h667.262635v403.966779c0 5.119997 4.287998 9.407995 9.535995 9.407995h66.687964a9.471995 9.471995 0 0 0 9.599994-9.407995V37.569539A37.759979 37.759979 0 0 0 864.639807 0.00356H102.145224A37.759979 37.759979 0 0 0 64.000245 37.570539v920.637497a37.759979 37.759979 0 0 0 38.143979 37.631979H426.240047a9.471995 9.471995 0 0 0 9.535995-9.407994V920.640057a9.471995 9.471995 0 0 0-9.599995-9.343995z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconchangdiankeqianhetongfenpeiguanli.defaultProps = {
  size: 18,
};

Iconchangdiankeqianhetongfenpeiguanli = React.memo ? React.memo(Iconchangdiankeqianhetongfenpeiguanli) : Iconchangdiankeqianhetongfenpeiguanli;

export default Iconchangdiankeqianhetongfenpeiguanli;