const Person = require('../person');
const extend = require('../../extend/extend');
const library = require('../../library/library');
const bookRequest = require('../../request_file/request');
const details = require('../../request_file/requestDetails');

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
    var result = {};
    for(let i = 0; i < bookRequest.length; i++){
        for(let j = 0; j < bookRequest[i].length; j++){
            if(library[bookRequest[i][j]]){
                result[details[i][j]] = 'given';
                library[bookRequest[i][j]]--;
            }
            else if(library[bookRequest[i][j]] == 0){
                result[details[i][j]] = 'book taken';
            }
            else{
                result[details[i][j]] = 'book not available';
            }
        }
    }
    console.log(result);
}

module.exports = Admin;