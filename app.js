const Admin = require('./person/admin/admin');
const Teacher = require('./person/users/teacher/teacher');
const Senior = require('./person/users/students/senior');
const Junior = require('./person/users/students/junior');
const bookRequest = require('./request_file/request');
const details = require('./request_file/requestDetails');

//an instance of Teacher
const David = new Teacher('David', 'Teacher');
David.req('War-Ship');

//an instance of Junior Student
const Dare = new Junior('Dare', 'Junior');
Dare.req('Lucy');

//an instance of Teacher
const Austin = new Teacher('Austin', 'Teacher');
Austin.req('The Hobbit');
Austin.req('Need for Speed');

//an instance of a Senior Student
const Ekene = new Senior('Ekene', 'Senior');
Ekene.req('The Force Man');

//an instance of a Senior Student
const Kazeem = new Senior('Kazeem', 'Senior');
Kazeem.req('Lucy');

//an instance of Admin
var kingsley = new Admin('Kingsley', 'Admin');

kingsley.addBook('Yellow Sun', 5);

kingsley.handleRequest();

console.log(details);
console.log(bookRequest);
console.log(David.borrowed);