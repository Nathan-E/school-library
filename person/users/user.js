const Person = require('../person');
const extend = require('../../extend/extend');
const requestCatalog = require('../../request_file/request');
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
User.prototype.requestBook = function (book) {
    that = this;
    //check if the request is from a Teacher and then pushes the request to bookRequest Teacher's array
    let found = requestCatalog.find( function (element) {
        return element['name'] == that.name && element['book'] == book;
    });
    if(!found) {
        requestCatalog.push({'name': that.name, 'book': book, 'priority': that.priority});
    }
}

//returns Book to the library and remmoves it from givenBook record
User.prototype.returnBook = function (book) {
    that = this;
    //checks if the user was given the book 
    if (givenBooks[this.name].includes(book)) {
        //removes the book from the list of books given to the user
        givenBooks[this.name].splice(givenBooks[this.name].indexOf(book), 1);
        //add the book back to the library
        library[book]++;
        for(request of requestCatalog){
            if(request['book'] == book && request['name'] == that.name){
                requestCatalog.splice(requestCatalog.indexOf(request), 1);
            }
        }
        return `${library[book]} returned`;
    } 
    // if the user was not given the book, tells the user that the book is not from the library
    else {
        return `${this.name}, ${book} is not from the Library`;
    }
}


module.exports = User;