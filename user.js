const Person = require('./person');
const extend = require('./extend')

//User constructor (Parent function)
function User(name, type) {
    Person.call(this, name);
    this.type = type
}

extend(User, Person)

module.exports = User;