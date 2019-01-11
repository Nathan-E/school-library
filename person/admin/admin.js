const Person = require('../person');
const extend = require('../../extend/extend');
const library = require('../../library/library');
const bookRequest = require('../../request_file/request');
const details = require('../../request_file/requestDetails');
const borrowerList = require('../../borrower_catalog/catalog');

//Admin constructor function
function Admin(name, type){
    Person.call(this, name);
    this.type = type;
}

extend(Admin, Person);

//Add books to the books object
Admin.prototype.addBook = function(name, quantity){
    library[name] = quantity;
}

//handles book request and updates the library
Admin.prototype.handleRequest = function (){
    let result = [];
    let givenBooks = {};
    for(let i = 0; i < bookRequest.length; i++){
        for(let j = 0; j < bookRequest[i].length; j++){
            if(library[bookRequest[i][j]]){
                result.push(`${details[i][j]} collected ${bookRequest[i][j]}`);
                library[bookRequest[i][j]]--;
                if(!givenBooks[details[i][j]]){
                    givenBooks[details[i][j]] = [bookRequest[i][j]];
                }
                else{
                    givenBooks[details[i][j]].push(bookRequest[i][j]);
                }
            }
            else if(library[bookRequest[i][j]] == 0){
                result.push(`${details[i][j]}, ${bookRequest[i][j]} has been taken`);
            }
            else{
                result.push(`${details[i][j]}, ${bookRequest[i][j]} is not available`);
            }
        }
    }
    console.log(result, givenBooks);
}

module.exports = Admin;