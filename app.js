const Admin = require('./person/admin/admin');
const Teacher = require('./person/users/teacher/teacher');
const Senior = require('./person/users/students/senior');
const Junior = require('./person/users/students/junior');
const library = require('./library/library');
const givenBooks = require('./borrower_catalog/catalog');

//an instance of Teacher
const David = new Teacher('David', 'Teacher');
David.reqestBook('War-Ship');
David.reqestBook('Alice');

//an instance of Junior Student
const Dare = new Junior('Dare', 'Junior');
Dare.reqestBook('Lucy');

//an instance of Teacher
const Austin = new Teacher('Austin', 'Teacher');
Austin.reqestBook('The Hobbit');
Austin.reqestBook('Need for Speed');

//an instance of a Senior Student
const Ekene = new Senior('Ekene', 'Senior');
Ekene.reqestBook('The Force Man');

//an instance of a Senior Student
const Kazeem = new Senior('Kazeem', 'Senior');
Kazeem.reqestBook('Lucy');

//an instance of Admin
var kingsley = new Admin('Kingsley', 'Admin');

kingsley.addBook('Yellow Sun', 5);

kingsley.handleRequest();
console.log(library);
console.log(givenBooks);
David.returnBook('Alice');
David.returnBook('Alice');
console.log(library);
console.log(givenBooks);

