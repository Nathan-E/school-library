const Person = require('../person');
const extend = require('../../extend/extend');
const bookRequest = require('../../request_file/request');
const details = require('../../request_file/requestDetails');
const library = require('../../library/library');
const givenBooks = require('../../borrower_catalog/givenBooks')

//User constructor (Parent function)
function User(name) {
    Person.call(this, name);
    this.borrowed = [];
}

extend(User, Person);

//req function sent a book request to the bookRequest array
User.prototype.requestBook = function (name){
    if(this.type == 'Teacher') {
        details[0].push(this.name);
        bookRequest[0].push(name);
      }
    if(this.type == 'Senior'){
        details[1].push(this.name);
        bookRequest[1].push(name);
      }
    if (this.type == 'Junior'){
        details[2].push(this.name);
        bookRequest[2].push(name);
    }
}

//returns Book to the library and remmoves it from givenBook record
User.prototype.returnBook = function (book) {
    if(givenBooks[this.name] && givenBooks[this.name].includes(book)){
        const a = givenBooks[this.name].indexOf(book);
        givenBooks[this.name].splice(a, 1);
        library[book]++;
        return `${library[book]} returned`;
    }
    else{
        // console.log(`${this.name}, this book is not from the Library`);
        return `${this.name}, this book is not from the Library`;
    }
}


module.exports = User;