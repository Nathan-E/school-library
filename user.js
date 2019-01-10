const Person = require('./person');
const extend = require('./extend');
const Teacher = require('./teacher');
const Senior = require('./senior');
const bookRequest = require('./request');
const teacherArray = require('');
const seniorArray = require('');
const juniorArray = require('');

//User constructor (Parent function)
function User(name) {
    Person.call(this, name);
}

extend(User, Person);

//req function sent a book request to the bookRequest array
User.prototype.req = function (name){
    if(Teacher.prototype.isPrototypeOf(this)) {
        teacherArray.push(name);
      }
      else if(Senior.prototype.isPrototypeOf(this)){
        seniorArray.push(name);
      }
      else{
        juniorArray.push(name);
      }
}

module.exports = User;