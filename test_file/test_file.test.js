const Person = require('../person/person');
const Admin = require('../person/admin/admin');
const User = require('../person/users/user');
const Teacher = require('../person/users/teacher/teacher');
const Student = require('../person/users/students/student');
const Senior = require('../person/users/students/senior');
const Junior = require('../person/users/students/junior');
const library = require('../library/library');
const givenBook = require('../borrower_catalog/givenBooks');
const details = require('../request_file/requestDetails');
const bookRequest = require('../request_file/request');

//an instance of Admin
var Kingsley = new Admin('Kingsley', 'Admin');

//an instance of Teacher
const David = new Teacher('David', 'Teacher');

//an instance of Teacher
const Austin = new Teacher('Austin', 'Teacher');

//an instance of a Senior Student
const Ekene = new Senior('Ekene', 'Senior');

//an instance of a Senior Student
const Eniola = new Senior('Eniola', 'Senior');

//an instance of Junior Student
const Dare = new Junior('Dare', 'Junior');

//an instance of Junior Student
const Nnamdi = new Junior('Nnamdi', 'Junior');

//Tests if the extend function the carry-out prototype chain works
describe('1. test the extend function that ensures inheritance', () => {
    test('checks if an Admin does not inherits from the User prototype chain', () => {
        expect(User.prototype.isPrototypeOf(Kingsley)).toBeFalsy();
    });
    test('checks if an Admin inherits from the Person prototype chain', () => {
        expect(Person.prototype.isPrototypeOf(Kingsley)).toBeTruthy();
    });
    test('checks if a student and a teacher does not inherits from the Admin prototype chain', () => {
        expect(Admin.prototype.isPrototypeOf(Austin)).toBeFalsy();
        expect(Admin.prototype.isPrototypeOf(Dare)).toBeFalsy();
        expect(Admin.prototype.isPrototypeOf(Eniola)).toBeFalsy();
    });
    test('checks if a Teacher instance inherits from the User prototype chain', () => {
        expect(User.prototype.isPrototypeOf(David)).toBeTruthy();
    });
    test('checks if a Senior student user inherits from the User prototype chain', () => {
        expect(User.prototype.isPrototypeOf(Ekene)).toBeTruthy();
    });
    test('checks if a Junior student user inherits from the User prototype chain', () => {
        expect(User.prototype.isPrototypeOf(Nnamdi)).toBeTruthy();
    });
});

//Tests the add book function 
describe('2. Test the add book function', () => {
    test('Ensures an admin can add a new book to the library', () => {
        Kingsley.addBook('Decagon HandBook', 10);
        expect(library['Decagon HandBook']).toBeTruthy();
    });
    test('Ensures an admin can update the number of any book in the library', () => {
        Kingsley.addBook('Decagon HandBook', 20);
        expect(library['Decagon HandBook']).toBe(30);
    });
    test('Ensures a Teacher cannot add a book to the library', () => {
        expect(()=> {David.addBook('ReactJS', 20)}).toThrow();
    });
    test('Ensures a Senior cannot add a book to the library', () => {
        expect(()=> {Ekene.addBook('ReactJS', 20)}).toThrow();
    });
    test('Ensures a Junior cannot add a book to the library', () => {
        expect(()=> {Dare.addBook('ReactJS', 20)}).toThrow();
    });
});


// //Tests the requestBook Function
// describe('1. Tests the requestBook', () => {
//     test('checks if the Teacher\'s Request is added to the bookRequest-Teacher array', () => {
//         const Ikedi = new Teacher('Zik', 'Teacher');
//         Ikedi.requestBook('War-Ship');
//         expect(bookRequest[0].includes('War-Ship')).toBeTruthy();
//     });
//     test('checks if the Senior\'s Request is added to the bookRequest-Senior array', () => {
//         const Isaac = new Senior('Isaac', 'Senior');
//         Isaac.requestBook('Node Handbook');
//         expect(bookRequest[1].includes('Node Handbook')).toBeTruthy();
//     });
//     test('checks if the Junior\'s Request is added to the bookRequest Junior array', () => {
//         const Bola = new Junior('Bola', 'Junior');
//         Bola.requestBook('Terminator');
//         expect(bookRequest[2].includes('Terminator')).toBeTruthy();
//     });
// });

// //Tests the returnBook Function
// describe('2. Tests the returnBook', () => {
//     test('checks if when a Teacher returns a book, that the book is been removed from the givenBooks array', () => {
//         const Ikedi = new Teacher('Ikedi', 'Teacher');
//         const Zaki = new Admin('Zaki', 'Admin');

//         Ikedi.requestBook('Alice');
//         Zaki.handleRequest();
//         Ikedi.returnBook('Alice');
//         expect(givenBook['Ikedi'].includes('Alice')).toBeFalsy();
//     });
//     test('checks if the User can return a book not gotten from the library', () => {
//         const Chioma = new Senior('Chioma', 'Senior');
//         const Nnamdi = new Admin('Nnamdi', 'Admin');
//         expect(Chioma.returnBook('G.O.T')).toEqual(`Chioma, this book is not from the Library`);
//     });
// });

// //Tests the addBook function
// describe('3. Tests the addBook Function', () => {
//     test('checks if the Admin can add books to the library', () => {
//         const Nnamdi = new Admin('Nnamdi', 'Admin');
//         Nnamdi.addBook('Phone-Boot', 5);
//         expect(library['Phone-Boot']).toBe(5);
//     });
// });

// //Tests the handleRequest function
// describe('4. Tests the handleRequest function', () => {
//     test('checks if when Teacher got a particular Book remaining one before a student', () => {
//         const Lucky = new Teacher('Lucky', 'Teacher');
//         const Smart = new Junior('Smart', 'Junior');
//         const Mercy = new Admin('Mercy', 'Admin');

//         Mercy.addBook('Legend', 1);
//         Smart.requestBook('Legend');
//         Lucky.requestBook('Legend');
//         Mercy.handleRequest();
//         expect(givenBook['Lucky'].includes('Legend')).toBeTruthy();

//     });
//     test('checks if a student did not get a particular Book because a Teacher request for it latter', () => {
//         const Chika = new Teacher('Chika', 'Teacher');
//         const Me = new Junior('Me', 'Junior');
//         const Joy = new Admin('Joy', 'Admin');

//         Joy.addBook('Legends', 1);
//         Me.requestBook('Legends');
//         Chika.requestBook('Legends');
//         Joy.handleRequest();
//         expect(givenBook['Me'].includes('Legends')).toBeFalsy();

//     });
// });