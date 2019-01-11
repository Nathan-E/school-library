const User = require('./person/users/user');
const Admin = require('./person/users/admin/admin');
const Teacher = require('./teacher');
const Senior = require('./senior');
const Junior = require('./junior');
const library = require('./library');






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