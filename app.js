const User = require('./person/users/user');
const Admin = require('./person/admin/admin');
const Teacher = require('./person/users/teacher/teacher');
const Senior = require('./person/users/students/senior');
const Junior = require('./person/users/students/junior');
const library = require('./library/library');

//an instance of Teacher
const David = new Teacher('David', 'Teacher');
David.req('War-Ship');

//an instance of Junior Student
const Dare = new Junior('Dare', 'Junior');
Dare.req('Lucy');

//an instance of Teacher
const Austin = new Teacher('Austin', 'Teacher');
Austin.req('The Hobbit');

//an instance of a Senior Student
const Jo = new Senior('Jo', 'Senior');
Jo.req('The Force Man');

//an instance of a Senior Student
const Kazeem = new Senior('Kazeem', 'Senior');
Kazeem.req('Lucy');

//an instance of Admin
var kingsley = new Admin('Kingsley', 'Admin');

kingsley.addBook('Yellow Sun', 5);

kingsley.handleRequest();