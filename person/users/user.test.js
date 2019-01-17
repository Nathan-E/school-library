const User = require('./user');
const Admin = require('../admin/admin');
const Teacher = require('./teacher/teacher');
const Senior = require('../users/students/senior/senior');
const Junior = require('../users/students/junior/junior');
const givenBook = require('../../data/borrower_catalog/givenBooks');
const requestCatalog = require('../../data/request_file/request');

//an instance of Admin
var Kingsley = new Admin('Kingsley');

//an instance of a Senior Student
const Ekene = new Senior('Ekene', 5434);

//an instance of Teacher
const David = new Teacher('David', 2345);

//an instance of Teacher
const Austin = new Teacher('Austin', 1123);

//an instance of a Senior Student
const Eniola = new Senior('Eniola', 6445);

//an instance of Junior Student
const Dare = new Junior('Dare', 6543);

//an instance of Junior Student
const Nnamdi = new Junior('Nnamdi', 3343);

describe('1. Testing inheritance', () => {
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

describe('2. Testing the Request Book Function', () => {
    test('Ensures a Teacher should not have a book not requested from the library', () => {
        expect(givenBook).not.toContainEqual({
            name: 'Austin',
            id: 1123,
            book: 'Alice',
            author: 'Mitchel Goose',
            priority: 1
        });
    });
    test('Ensures a Senior Student can request for a book from the library', () => {
        Eniola.requestBook('Alice', 'Mitchel Goose');
        expect(requestCatalog).toContainEqual({
            name: 'Eniola',
            id: 6445,
            book: 'Alice',
            author: 'Mitchel Goose',
            priority: '2'
        });
    });
    test('Ensures a Junior Student can request for a book from the library', () => {
        Dare.requestBook('Alice', 'Mitchel Goose');
        expect(requestCatalog).toContainEqual({
            name: 'Dare',
            id: 6543,
            book: 'Alice',
            author: 'Mitchel Goose',
            priority: '3'
        });
    });
});

//Test the ReturnBook function
describe('3. Testing the Use returnBook function', () => {
    test('Ensure a user can return a Book borrowed, to the Library', () => {
        Kingsley.addBook('The Navy', 'Butt Rice', 22, '5749-8979');
        Nnamdi.requestBook('The Navy', 'Butt Rice');
        Kingsley.handleRequest();
        Nnamdi.returnBook('The Navy', 'Butt Rice');
        expect(givenBook).not.toContainEqual({
            name: 'Nnamdi',
            id: 3343,
            book: 'The Navy',
            author: 'Butt Rice',
            priority: '3'
        });
    });
    test('Ensures a user cannot return a book not taken fro the library', () => {
        expect(Dare.returnBook('Terminal', 'Jones Ross')).toBe('Dare, Terminal is not from the Library');
    });
    test('Ensure when a user returns a book, the user\'s detail leaves the requested books list', () => {
        Kingsley.addBook('Jack the Gaint Slayer', 'Frank Eddy', 2, '8439-2842');
        Ekene.requestBook('Jack the Gaint Slayer', 'Frank Eddy');
        Kingsley.handleRequest();
        Ekene.returnBook('Jack the Gaint Slayer', 'Frank Eddy');
        expect(requestCatalog).not.toContainEqual({
            name: 'Ekene',
            id: 5434,
            book: 'Jack the Gaint Slayer',
            author: 'Frank Eddy',
            priority: '2'
        });
    });
});