const User = require('../person/users/user');
const Admin = require('../person/admin/admin');
const Person = require('../person/person');
const Teacher = require('../person/users/teacher/teacher');
const Student = require('../person/users/students/student');
const Senior = require('../person/users/students/senior');
const Junior = require('../person/users/students/junior');
const library = require('../library/library');
const givenBook = require('../borrower_catalog/givenBooks');
const details = require('../request_file/requestDetails');
const bookRequest = require('../request_file/request');

//Tests the requestBook Function
describe('1. Tests the requestBook', () => {
    test('checks if the Teacher\'s Request is added to the bookRequest-Teacher array', () => {
        const Ikedi = new Teacher('Zik', 'Teacher');
        Ikedi.requestBook('War-Ship');
        expect(bookRequest[0].includes('War-Ship')).toBeTruthy();
    });
    test('checks if the Senior\'s Request is added to the bookRequest-Senior array', () => {
        const Isaac = new Senior('Isaac', 'Senior');
        Isaac.requestBook('Node Handbook');
        expect(bookRequest[1].includes('Node Handbook')).toBeTruthy();
    });
    test('checks if the Junior\'s Request is added to the bookRequest Junior array', () => {
        const Bola = new Junior('Bola', 'Junior');
        Bola.requestBook('Terminator');
        expect(bookRequest[2].includes('Terminator')).toBeTruthy();
    });
});

//Tests the returnBook Function
describe('2. Tests the returnBook', () => {
    test('checks if when a Teacher returns a book, that the book is been removed from the givenBooks array', () => {
        const Ikedi = new Teacher('Ikedi', 'Teacher');
        const Zaki = new Admin('Zaki', 'Admin');

        Ikedi.requestBook('Alice');
        Zaki.handleRequest();
        Ikedi.returnBook('Alice');
        expect(givenBook['Ikedi'].includes('Alice')).toBeFalsy();
    });
    test('checks if the User can return a book not gotten from the library', () => {
        const Chioma = new Senior('Chioma', 'Senior');
        const Nnamdi = new Admin('Nnamdi', 'Admin');
        expect(Chioma.returnBook('G.O.T')).toEqual(`Chioma, this book is not from the Library`);
    });
});

//Tests the addBook function
describe('3. Tests the addBook Function', () => {
    test('checks if the Admin can add books to the library', () => {
        const Nnamdi = new Admin('Nnamdi', 'Admin');
        Nnamdi.addBook('Phone-Boot', 5);
        expect(library['Phone-Boot']).toBe(5);
    });
});

//Tests the handleRequest function
describe('4. Tests the handleRequest function', () => {
    test('checks if when Teacher got a particular Book remaining one before a student', () => {
        const Lucky = new Teacher('Lucky', 'Teacher');
        const Smart = new Junior('Smart', 'Junior');
        const Mercy = new Admin('Mercy', 'Admin');

        Mercy.addBook('Legend', 1);
        Smart.requestBook('Legend');
        Lucky.requestBook('Legend');
        Mercy.handleRequest();
        expect(details[0].includes('Lucky')).toBeTruthy();
    });
});