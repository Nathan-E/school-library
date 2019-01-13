const Person = require('../person');
const extend = require('../../extend/extend');
const requestCatalog = require('../../request_file/request');
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
User.prototype.requestBook = function (book) {
    that = this;
    //check if the user requested for the book  before
    let found = requestCatalog[that.type].find( function (element) {
        return element[0] == that.name && element[1] == book;
    });
    //logs the request if the user have not requested for the book previously
    if(!found) {
        requestCatalog[that.type].push([this.name, book]);
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
        //removes the book fro the request Catalog
        for(let i =0 ; i < requestCatalog[this.type].length; i++){
            if (requestCatalog[this.type][i][0] == this.name && requestCatalog[this.type][i][1] == book){
                requestCatalog[this.type].splice(i, 1);
            }
        }
        return `${this.name} returned ${library[book]}`;
    } 
    // if the user was not given the book, tells the user that the book is not from the library
    else {
        return `${this.name}, ${book} is not from the Library`;
    }
}


module.exports = User;