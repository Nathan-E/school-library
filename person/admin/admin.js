const Person = require('../person');
const extend = require('../../extend/extend');
const library = require('../../library/library');
const bookRequest = require('../../request_file/request');
const details = require('../../request_file/requestDetails');
const givenBooks = require('../../borrower_catalog/givenBooks');

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
    //result holds detail of book request 
    let result = [];
    //loops through the requested book array
    for (let i = 0; i < bookRequest.length; i++) {
        for (let j = 0; j < bookRequest[i].length; j++) {
            //checks if the book requested is in the library
            if (library[bookRequest[i][j]]) {
                result.push(`${details[i][j]} collected ${bookRequest[i][j]}`);
                //decreases the number of the book requested in the library
                library[bookRequest[i][j]]--;
                //adds the users name and the book collected to the givenBook array
                givenBooks[details[i][j]].push(bookRequest[i][j]);
                //handles the request when the quantity of the book is zero   
            } else if (library[bookRequest[i][j]] == 0) {
                result.push(`${details[i][j]}, ${bookRequest[i][j]} has been taken`);
                //handles the request when the library never had the book    
            } else {
                result.push(`${details[i][j]}, ${bookRequest[i][j]} is not available`);
            }
        }
    }
    return result;
}

module.exports = Admin;