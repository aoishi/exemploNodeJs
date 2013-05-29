var util = require('util')
var EventEmitter = require('events').EventEmitter;
var cp = require('child_process');

var Door = function() {
opened : false; 
var self = this;
emitEvents : setInterval(function() {
	     if(!self.opened){
		self.emit('closed');
	     }
	     else{
		self.emit('opened');
	     }
	}, 100);
};

util.inherits(Door,EventEmitter)

Door.prototype.stop = function() {
	clearInterval(this.emitEvents);
};

var door=new Door(); 

door.on('closed',function(){
  console.log('The door is closed');
});
door.once('opened',function(){
  console.log('Now its opened');
});

cp.exec('node timeout.js', function(){ door.opened = true; door.stop();});
