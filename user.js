const Person = require('./person');
const extend = require('./extend');
const library = require('./library');

//User constructor (Parent function)
function User(name) {
    Person.call(this, name);
}

extend(User, Person);

User.prototype.returnBook = function (name) {
  
}

module.exports = User;