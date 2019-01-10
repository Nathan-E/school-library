const Person = require('./person');
const extend = require('./extend');

//User constructor (Parent function)
function User(name) {
    Person.call(this, name);
}

extend(User, Person);

module.exports = User;