const User = require('./user');
const Admin = require('./admin');
const Teacher = require('./teacher');
const Senior = require('./senior');
const Junior = require('./junior');
const bookRequest = require('./request');
const library = require('./library');
const teacherArray = require('./teacherRequest');
const seniorArray = require('./seniorRequest');
const juniorArray = require('./juniorRequest');
const details = require('./requestDetails')


//req function sent a book request to the bookRequest array
User.prototype.req = function (name){
    if(Teacher.prototype.isPrototypeOf(this)) {
        details[0].push(this.name);
        teacherArray.push(name);
      }
    if(Senior.prototype.isPrototypeOf(this)){
        details[1].push(this.name);
        seniorArray.push(name);
      }
    if (Junior.prototype.isPrototypeOf(this)){
        details[2].push(this.name);
        juniorArray.push(name);
    }
}


//an instance of Teacher
const David = new Teacher('David', 'Teacher');
David.req('War-Ship');

//an instance of Junior Student
const Dare = new Junior('Dare', 'Student');
Dare.req('Lucy');

//an instance of Teacher
const Austin = new Teacher('Austin', 'Teacher');
Austin.req('The Hobbit');

//an instance of a Senior Student
const Jo = new Senior('Jo', 'Student');
Jo.req('The Force Man');

//an instance of Admin
var kingsley = new Admin('Kingsley', 'Admin');
kingsley.addBook('Yellow Sun', 5);

console.log(details);
console.log(bookRequest);

kingsley.giveBook = function (){
    
}