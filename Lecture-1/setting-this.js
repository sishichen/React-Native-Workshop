var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
};

const logName = function (lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
}

// logName(); // error

logName.apply(person, ['en', 'es']); // invoke immediately
logName.call(person, 'en', 'es'); // invoke immediately
var l = logName.bind(person);
l('en', 'es')