const Person = require('../../person');
const extend = require('../../../extend');
const library = require('../../../library');
const bookRequest = require('../../../request');
const details = require('../../../requestDetails');

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