import { readFileSync } from 'fs';
import { Magic } from 'mmmagic';
import { createFilter } from 'rollup-pluginutils';

export default function image ( options = {} ) {
	const filter = createFilter( options.include, options.exclude );
	const magic = new Magic();

	return {
		name: 'file-as-blob',

		intro: `function __$strToBlobUri(str, mime, isBinary) {
			try {
				return window.URL.createObjectURL(
					new Blob([Uint8Array.from(
						str.split('').map(function(c) {return c.charCodeAt(0)})
					)], {type: mime})
				);
			} catch() {
				return "data:" + mime + (isBinary ? ";base64," : ",") + str;
			}
		}`,

		load ( id ) {
			return new Promise((res, rej)=> {

				if ( !filter( id ) ) { return rej(); }

				magic.detectFile(id, (mime)=>{

					const charset = mime.split('; charset=')[1];

					var readEncoding = 'base64';
					if (charset === 'utf-8') readEncoding = 'utf8';
					if (charset.indexOf('ascii') !== -1) readEncoding = 'ascii';

					const data = readFileSync( id, readEncoding );

					var code;
					if (readEncoding === 'base64') {
						code = `export default var bloburi = __$strToBlobUri(atob("${data}"), ${mime}, true);`
					} else {
						code = `export default var bloburi = __$strToBlobUri("${data}", ${mime}, false);`
					}

					const ast = {
						type: 'Program',
						sourceType: 'module',
						start: 0,
						end: null,
						body: []
					};

					return res({ ast, code, map: { mappings: '' } });
				});
			});
		}
	};
}
