// Run rollup -c rollup.config.js
// Then copy-paste the result into a browser's dev console

import marker from './marker-icon.png';
import stairs from './stairs-up.svg';

var img1 = new Image();
img1.src = marker;

var img2 = new Image(100, 100);
img2.src = stairs;

document.body.appendChild(img1);
document.body.appendChild(img2);
