const Person = require('../person');
const extend = require('../../extend/extend');
const bookRequest = require('../../request_file/request');
const details = require('../../request_file/requestDetails');
const library = require('../../library/library');

//User constructor (Parent function)
function User(name) {
    Person.call(this, name);
    this.borrowed = [];
}

extend(User, Person);

//req function sent a book request to the bookRequest array
User.prototype.req = function (name){
    if(this.type == 'Teacher') {
        details[0].push(this.name);
        bookRequest[0].push(name);
        // this.borrowed.push(name);
      }
    if(this.type == 'Senior'){
        details[1].push(this.name);
        bookRequest[1].push(name);
        // this.borrowed.push(name);
      }
    if (this.type == 'Junior'){
        details[2].push(this.name);
        bookRequest[2].push(name);
        // this.borrowed.push(name);
    }
}

User.prototype.returnBook = function (name) {
    
}

module.exports = User;