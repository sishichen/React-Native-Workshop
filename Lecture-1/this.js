// function a() {
// 	console.log(this);
// }

// var b = function() {
// 	console.log(this);
// }

// a(); //this is global object
// b(); //this is global object

var c = {
	name: 'The c object',
	log: function() {
		console.log(this);
	}
};

c.log(); //the object that the method is sitting inside of. In this case 'c'

// JS bug
var c = {
  name: 'The c object',
  log: function() {
    // var self = this;
    // self.name = 'Updated c object';
    this.name = 'Updated c object';
    console.log(this.name); // 'The c object', `this` is point to the object 
    
    var setName = function(newName) {
      console.log(this.name); // undefined, `this` is point to the global
      // self.name = newName;
      this.name = newName;
    }
    setName('Updated again! The c object');
    console.log(this);
  }
}

c.log();