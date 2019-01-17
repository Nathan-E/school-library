const Person = require('../person');
const extend = require('../../extend/extend');
const requestCatalog = require('../../data/request_file/request');
const library = require('../../data/library/library');
const givenBooks = require('../../data/borrower_catalog/givenBooks');


//User constructor (Parent function), givenBooks holds the books collected by the user
function User(name, id) {
    Person.call(this, name);
    this.id = id;
}

//ensures prototype chaining to parent (Person)
extend(User, Person);



//request function sent the book requested to requestCatalog array
User.prototype.requestBook = function (book, author) {
    that = this;
    requestCatalog.push({
        name: that.name,
        id: that.id,
        book: book,
        author: author,
        priority: that.priority
    });
}



//returns Book to the library and removes it from the User's givenBook record
User.prototype.returnBook = function (book, author) {
    that = this;
    //checks if the user was given the book 
    let checkUser = givenBooks.findIndex(obj => obj.id === that.id && obj.book === book && obj.author === author);
    if (checkUser > -1) {
        //removes the book from the list of books given to the user
        givenBooks.splice(checkUser, 1);
        //add the book back to the library
        let bookIndex = library.findIndex( obj => obj.book === book && obj.author === author);
        library[bookIndex]['quantity']++;
        //removes the book from the requested Book catalog
        for (request of requestCatalog) {
            if (request['book'] == book && request['id'] == that.id
             && request['author'] === author) {
            requestCatalog.splice(requestCatalog.indexOf(request), 1);
            }
        }
    }
    // if the user was not given the book, tells the user that the book is not from the library
    else {
        return `${this.name}, ${book} is not from the Library`;
    }
}


module.exports = User;