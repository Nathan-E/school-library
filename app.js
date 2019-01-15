const Admin = require('./person/admin/admin');
const Teacher = require('./person/users/teacher/teacher');
const Senior = require('./person/users/students/senior');
const Junior = require('./person/users/students/junior');

//an instance of Teacher
const David = new Teacher('David');
David.requestBook('War-Ship');
David.requestBook('War-Ship');
David.requestBook('Avengers');
David.requestBook('Avengers');

//an instance of Junior Student
const Dare = new Junior('Dare');
Dare.requestBook('Lucy');

//an instance of Teacher
const Austin = new Teacher('Austin');
Austin.requestBook('The Hobbit');
Austin.requestBook('Need for Speed');

//an instance of a Senior Student
const Ekene = new Senior('Ekene');
Ekene.requestBook('The Force Man');

//an instance of a Senior Student
const Kazeem = new Senior('Kazeem');
Kazeem.requestBook('Lucy');
Kazeem.requestBook('Avengers');

//an instance of Admin
var kingsley = new Admin('Kingsley');

//adding a book to the library
kingsley.addBook('Yellow Sun', 5);
