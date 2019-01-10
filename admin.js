const Person = require('./user');
const extend = require('./extend');
const library = require('./library')

//Admin constructor function
function Admin(name, type){
    Person.call(this, name);
    this.type = type
}

extend(Admin, Person);

//Add books to the books object
Admin.prototype.addBook = function(name, quantity){
    library[name] = quantity;
}

//an instance of Admin
var zak = new Admin('Zak', 'Admin');
console.log(library);

zak.addBook('Yellow Sun', 5);

console.log(library);

module.exports = Admin;