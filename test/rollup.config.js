import fileAsBlob from '../dist/rollup-plugin-file-as-blob.es.js';

export default {
	entry: 'test2.js',
	plugins: [ fileAsBlob({
		include: ["*.png", "*.svg"]
	}) ]
};
