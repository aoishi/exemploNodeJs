var cp = require('child_process');

var open = false;
￼￼￼￼
cp.exec('node block2.js', function(){ open = true; });

while(!open) {
	console.log('opened!');
}