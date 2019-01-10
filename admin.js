const Person = require('./person');
const extend = require('./extend');
const library = require('./library')

//Admin constructor function
function Admin(name, type){
    Person.call(this, name);
    this.type = type;
}

extend(Admin, Person);

//Add books to the books object
Admin.prototype.addBook = function(name, quantity){
    library[name] = quantity;
}

module.exports = Admin;