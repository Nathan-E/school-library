const Person = require('../person');
const extend = require('../../extend/extend');
const library = require('../../library/library');
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

    requestCatalog.sort(function (a,b) {
    return a['priority'].localeCompare(b['priority']);
    });
    //loops through the requested book array
    
    // for (let i = 0; i < details.length; i++) {
    //     for (let j = 0; j < details[i][0].length; j++) {
    //         //checks if the book requested is in the library
    //         if (library[details[i][0][j][1]] && !givenBooks[details[i][0][j][0]].includes(details[i][0][j][1])) {
    //             result.push(`${details[i][0][j][0]} collected ${details[i][0][j][1]}`);
    //             //decreases the number of the book requested in the library
    //             library[details[i][0][j][1]]--;
    //             //adds the users name and the book collected to the givenBook array
    //             givenBooks[details[i][0][j][0]].push(details[i][0][j][1]);
    //             //handles the request if the user have collected the book before
    //         } else if (givenBooks[details[i][0][j][0]].includes(details[i][0][j][1])){
    //             result.push(`${details[i][0][j][0]}, you cannot collect ${details[i][0][j][1]} twice`);
    //             //handles the request when the quantity of the book is zero   
    //         } else if (library[details[i][0][j][1]] == 0) {
    //             result.push(`${details[i][0][j][0]}, ${details[i][0][j][1]} has been taken`);
    //             //handles the request when the library never had the book    
    //         } else {
        
        const index2 = requestCatalog.findIndex(obj => obj.name === that.name && obj.book === book);
        requestCatalog.splice(index2, 1);
    //             result.push(`${details[i][0][j][0]}, ${details[i][0][j][1]} is not available`);
    //         }
    //     }
    // }
    return result;
}

module.exports = Admin;