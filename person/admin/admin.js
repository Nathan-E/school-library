const Person = require('../person');
const extend = require('../../extend/extend');
const library = require('../../library/library');
const requestCatalog = require('../../request_file/request');
const givenBooks = require('../../borrower_catalog/givenBooks');

//Admin constructor function
function Admin(name) {
    Person.call(this, name);
}

//ensures prototype chaining to parent (Person)
extend(Admin, Person);

//Add books to the library
Admin.prototype.addBook = function (book, author, quantity, ISBN) {
    //checks if a book is available, and adds the present quantity to it
    const bookIndex = library.findIndex(obj => obj.ISBN === ISBN && obj.book === bookk);

    //if a book is not in the library, it adds the book to the library
    if (bookIndex === -1) {
        library.push({
            book: book,
            author: author,
            quantity: quantity,
            ISBN: ISBN
        });
        //Updates the quantity of a book, if it exists in the library
    } else {
        library[bookIndex]['quantity'] += quantity;
    }
}

//handles book request and updates the library
Admin.prototype.handleRequest = function () {
    //holds the request of user which book requested quantity is zero
    let unAttendedRequest = [];

    //sort the request array based on priority
    requestCatalog.sort(function (a, b) {
        return a['priority'].localeCompare(b['priority']);
    });

    //loops through the request log
    for (let request of requestCatalog) {
        let bookIndex = library.findIndex( obj => obj.name === request['book'] && obj.author === request['author']);
        let checkUser = givenBooks.find(function (obj) {
            return obj.id === request['id'] && obj.book === request['book'] && obj.author === request['author']
        });

        if ( bookIndex > -1 && library[bookIndex]['quantity'] && !checkUser) {
            //reduces the quantity of a book when it is given
            library[bookIndex]['quantity']--;
            //add the book to the list of books given to the user
            givenBooks.push(request);
        } else if (library[bookIndex]['quantity'] === 0) {
            unAttendedRequest.push(`${request['name']}, ${request['book']} has been taken`);
        }
    }
    return unAttendedRequest;
}

module.exports = Admin;