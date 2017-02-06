// Run rollup -c rollup.config.js


// import marker from './'


var fileAsBlob = require('../dist/rollup-plugin-file-as-blob.cjs.js')();

fileAsBlob.load('./marker-icon.png').then(function(r){
// fileAsBlob.load('/home/ivan/devel/rollup-plugin-file-as-blob/test/marker-icon.png').then(function(r){
	console.log(r);
})

fileAsBlob.load('./stairs-up.svg').then(function(r){
// fileAsBlob.load('/home/ivan/devel/rollup-plugin-file-as-blob/test/marker-icon.png').then(function(r){
	console.log(r);
})

