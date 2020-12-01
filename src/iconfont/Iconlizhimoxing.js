/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconlizhimoxing = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M501.61152 1021.88032c-213.79072 0-394.41408-92.66176-394.41408-202.3424 0-167.08096 104.50432-314.92096 261.18656-371.23584-66.74432-44.37504-107.78624-119.97184-107.78624-199.81312 0-132.18304 107.54048-239.72864 239.72864-239.72864s239.72352 107.54048 239.72352 239.72864c0 79.47776-40.76032 154.88512-107.04896 199.3216 44.94336 16.03072 86.37952 40.00256 123.29472 71.34208 1.85344 1.58208 2.34496 4.2496 1.16736 6.37952-0.9216 1.664-2.65728 2.64704-4.48 2.64704-0.51712 0-1.02912-0.0768-1.54112-0.24064-23.88992-7.54688-48.96256-11.37152-74.5216-11.37152-9.77408 0-20.96128 1.21856-31.5904 2.53952-0.20992 0.0256-0.41984 0.04096-0.62976 0.04096-0.74752 0-1.49504-0.16384-2.18112-0.4864-38.8608-18.28352-80.3072-28.78464-123.1872-31.2064-6.29248 0.50176-12.68736 0.75264-19.01056 0.75264-6.33344 0-12.72832-0.256-19.01568-0.75264-175.872 9.93792-313.59488 155.74016-313.59488 332.07808 0 62.90944 141.37856 138.00448 323.65568 140.53888 1.33632 0.02048 2.60608 0.55296 3.54816 1.50016 19.4048 19.40992 41.48736 34.65728 69.4784 47.97952 2.10432 1.00352 3.26656 3.3024 2.83136 5.58592-0.44032 2.28864-2.36544 3.9936-4.68992 4.15232C542.1056 1020.65664 522.07104 1021.88032 501.61152 1021.88032zM500.3264 476.68736c6.27712 0 12.62592 0.17408 18.88256 0.512 31.07328-2.56512 61.71648-11.70944 89.30816-26.56768-29.14304-8.5248-59.28448-13.52704-89.7536-14.88384-6.08768 0.59904-12.288 0.90624-18.43712 0.90624-5.86752 0-11.79136-0.27648-17.61792-0.82944-30.49984 1.48992-60.65152 6.6048-89.79968 15.22176 27.38688 14.61248 57.7536 23.6032 88.53504 26.15296C487.69024 476.85632 494.03904 476.68736 500.3264 476.68736zM500.3264 70.56384c-98.10944 0-177.92512 79.81568-177.92512 177.92 0 90.50112 70.49216 168.21248 160.55296 177.0752 6.17984-0.29184 12.45696-0.4352 18.65728-0.4352 5.6064 0 11.27424 0.11776 16.86016 0.3584 89.6256-9.22624 159.77984-86.90176 159.77984-176.9984C678.25152 150.37952 598.43584 70.56384 500.3264 70.56384zM675.63008 1016.7296c-132.18304 0-239.72352-107.54048-239.72352-239.72864s107.54048-239.72864 239.72352-239.72864c132.18816 0 239.72864 107.54048 239.72864 239.72864S807.81824 1016.7296 675.63008 1016.7296zM675.63008 599.07072c-98.10432 0-177.92 79.8208-177.92 177.93024 0 98.10432 79.81568 177.92 177.92 177.92 98.10944 0 177.93024-79.81568 177.93024-177.92C853.56032 678.89152 773.73952 599.07072 675.63008 599.07072zM610.6624 884.45952c-1.36192 0-2.6624-0.5376-3.61984-1.50016l-36.45952-36.45952c-2.00192-2.00192-2.00192-5.23776 0-7.23968l62.0032-62.0032-62.9248-62.9248c-0.96256-0.96256-1.50016-2.25792-1.50016-3.61984s0.5376-2.6624 1.50016-3.61984l36.45952-36.45952c0.9984-0.9984 2.30912-1.50016 3.61984-1.50016s2.62144 0.50176 3.61984 1.50016l62.91968 62.91968 62.91968-62.91968c0.96256-0.96256 2.25792-1.50016 3.61984-1.50016s2.6624 0.5376 3.61984 1.50016l36.45952 36.45952c2.00192 2.00192 2.00192 5.23776 0 7.23968l-62.91456 62.91968 62.0032 62.00832c0.96256 0.96256 1.50016 2.25792 1.50016 3.61984s-0.5376 2.6624-1.50016 3.61984l-36.45952 36.45952c-0.9984 0.9984-2.30912 1.50016-3.61984 1.50016s-2.62144-0.50176-3.61984-1.50016l-62.0032-62.0032-62.0032 62.0032C613.31968 883.92192 612.0192 884.45952 610.6624 884.45952z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M499.11808 491.52c-12.08832 0-24.22272-0.90624-36.07552-2.69312C346.78272 471.296 259.11808 369.28 259.11808 251.52c0-132.33664 107.66336-240 240-240s240 107.66336 240 240c0 119.17824-85.34016 218.91584-202.92096 237.15328C524.01152 490.56256 511.5392 491.52 499.11808 491.52zM500.48 74.24c-96.69632 0-175.36 78.99136-175.36 176.08704 0 97.09056 78.66368 176.08192 175.36 176.08192S675.84 347.4176 675.84 250.32704C675.83488 153.23136 597.1712 74.24 500.48 74.24z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconlizhimoxing.defaultProps = {
  size: 18,
};

Iconlizhimoxing = React.memo ? React.memo(Iconlizhimoxing) : Iconlizhimoxing;

export default Iconlizhimoxing;
