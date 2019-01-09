const x = require('./user');
const User = x.User;
const extend = x.extend;

//Book object holds all the book
var books = {};

//Admin constructor function
function Admin(name, type){
    User.call(this, name, type);
}

//Add books to the books object
Admin.prototype.addBook = function(name, quantity){
    books[name] = quantity;
}

var zak = new Admin('Zak', 'Admin');

zak.addBook('Alice', 10);
zak.addBook('Lucy', 2);
zak.addBook('The Hobbit', 4);
zak.addBook('Avengers', 1);


console.log(books);

extend(Admin, User);

module.exports = Admin;