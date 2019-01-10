const Person = require('./person');
const extend = require('./extend');
const bookRequest = require('./request');

//User constructor (Parent function)
function User(name) {
    Person.call(this, name);
}

extend(User, Person);

User.prototype.req = function (name){
    bookRequest.push(name);
    return bookRequest;
}

module.exports = User;