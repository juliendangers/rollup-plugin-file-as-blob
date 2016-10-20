# rollup-plugin-file-as-blob

Import any (binary) file as a blob URL.

## Installation

```bash
yarn add --dev rollup-plugin-file-as-blob
```
or
```bash
npm install --save-dev rollup-plugin-file-as-blob
```


## Usage

```js
// In rollup.config.js
import fileAsBlob from 'rollup-plugin-file-as-blob';

export default {
  entry: 'src/index.js',
  dest: 'dist/my-lib.js',
  plugins: [
    fileAsBlob()
  ]
};
```

You can now refer to the content of those files as blob URLs, like so:

```js
import logo from './rollup.png';

var img = new Image();
img.src = logo;
document.body.appendChild( img );
```

Binary data is encoded using base64, which means they will be 33% larger than the original size on disk.

You should therefore only use this for small images where the convenience of having
them available on startup (e.g. rendering immediately to a canvas without
co-ordinating asynchronous loading of several images) outweighs the cost.

Using [`blob:` URLs](http://caniuse.com/#search=Blob%20URLs) means that the browser
(or the JS engine) will decode the data just once, instead of every time the data
is used. The alternative technique of using [`data:` URIs](http://caniuse.com/#feat=datauri)
means that the data is decoded every time it is used.

The downside is that the `blob:` URL technique does not work on IE9 or older, nor
on Node.js environments.



## License

"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.
