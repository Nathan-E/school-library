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
Admin.prototype.addBook = function (bookName, author, quantity, ISBN) {
    //checks if a book is available, and adds the present quantity to it
    const bookIndex = library.findIndex(obj => obj.ISBN === ISBN && obj.bookName === bookName);

    //if a book is not in the library, it adds the book to the library
    if (bookIndex === -1) {
        library.push({
            bookName,
            author,
            quantity,
            ISBN
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
    for (request of requestCatalog) {
        if (library[request['book']] && !givenBooks[request['name']].includes(request['book'])) {
            //reduces the quantity of a book when it is given
            library[request['book']]--;
            //add the book to the list of books given to the user
            givenBooks[request['name']].push(request['book']);
        } else if (library[request['book']] == 0 && !givenBooks[request['name']].includes(request['book'])) {
            unAttendedRequest.push(`${request['name']}, ${request['book']} has been taken`);
        }
    }
    return unAttendedRequest;
}

module.exports = Admin;