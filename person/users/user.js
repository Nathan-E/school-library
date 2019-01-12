const Person = require('../person');
const extend = require('../../extend/extend');
const bookRequest = require('../../request_file/request');
const details = require('../../request_file/requestDetails');
const library = require('../../library/library');
const givenBooks = require('../../borrower_catalog/givenBooks');


//User constructor (Parent function), givenBooks holds the books collected by the user
function User(name) {
    Person.call(this, name);
    givenBooks[this.name] = [];
}

//ensures prototype chaining to parent Person
extend(User, Person);

//request function sent the book requested to the bookRequest array
User.prototype.requestBook = function (name) {
    //check if the request is from a Teacher and then pushes the request to bookRequest Teacher's array
    if (this.type == 'Teacher') {
        details[0].push(this.name);
        bookRequest[0].push(name);
    }
    //check if the request is from a Senior and then pushes the request to bookRequest Senior's array
    if (this.type == 'Senior') {
        details[1].push(this.name);
        bookRequest[1].push(name);
    }
    //check if the request is from a Junior and then pushes the request to bookRequest Junior's array
    if (this.type == 'Junior') {
        details[2].push(this.name);
        bookRequest[2].push(name);
    }
}

//returns Book to the library and remmoves it from givenBook record
User.prototype.returnBook = function (book) {
    //checks if the user was given the book 
    if (givenBooks[this.name].includes(book)) {
        const a = givenBooks[this.name].indexOf(book);
        //removes the book from the list of books given to the user
        givenBooks[this.name].splice(a, 1);
        //add the book back to the library
        library[book]++;
        return `${library[book]} returned`;
    } 
    // if the user was not given the book, tells the user that the book is not from the library
    else {
        return `${this.name}, this book is not from the Library`;
    }
}


module.exports = User;