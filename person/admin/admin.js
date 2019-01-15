const Person = require('../person');
const extend = require('../../extend/extend');
const library = require('../../library/library');
const requestCatalog = require('../../request_file/request');
const givenBooks = require('../../borrower_catalog/givenBooks');
// const unAttendedRequest = require('../../request_file/requestDetails');

//Admin constructor function, admins name and its functionality(type = 'Admin')
function Admin(name, type) {
    Person.call(this, name);
    this.type = type;
}

//ensures prototype chaining to parent Person
extend(Admin, Person);

//Add books to the books object
Admin.prototype.addBook = function (name, quantity) {
    //checks if a book is available, and adds the present quantity to it
    if (library[name]) {
        library[name] += quantity;
    }
    //if a book is not in the library, it adds the book to the library
    else {
        library[name] = quantity;
    }
}

//handles book request and updates the library
Admin.prototype.handleRequest = function () {
     let unAttendedRequest = [];

    requestCatalog.sort(function (a,b) {
        return a['priority'].localeCompare(b['priority']);
    });

    for(request of requestCatalog){
        if(library[request['book']] && !givenBooks[request['name']].includes(request['book'])){
            library[request['book']]--;
            givenBooks[request['name']].push(request['book']);
            // requestCatalog.splice(requestCatalog.indexOf(request), 1);
        }else if (library[request['book']] == 0 && !givenBooks[request['name']].includes(request['book'])){
            unAttendedRequest.push(`${request['name']}, ${request['book']} has been taken`);
        }
    }
    return unAttendedRequest;
}

module.exports = Admin;