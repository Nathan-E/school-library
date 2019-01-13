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
const requestCatalog = require('../request_file/request');

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

describe('3. Testing the Request Book Function', () => {
    test('Ensures a Teacher can request for a book from the library', () => {
        Austin.requestBook('Alice');
        let found = requestCatalog['Teachers'].find( function (element) {
            return element[0] == that.name && element[1] == 'Alice';
        });
        expect(found[0]).toBe('Austin');
        expect(found[1]).toBe('Alice');
    });
    test('Ensures a Senior Student can request for a book from the library', () => {
        Eniola.requestBook('Alice');
        let found = requestCatalog['Seniors'].find( function (element) {
            return element[0] == that.name && element[1] == 'Alice';
        });
        expect(found[0]).toBe('Eniola');
        expect(found[1]).toBe('Alice');
    });
    test('Ensures a Junior Student can request for a book from the library', () => {
        Dare.requestBook('Alice');
        let found = requestCatalog['Juniors'].find( function (element) {
            return element[0] == that.name && element[1] == 'Alice';
        });
        expect(found[0]).toBe('Dare');
        expect(found[1]).toBe('Alice');
    });
});

describe('4. Testing the handleRequest function', () => {
    test('Ensures an Admin can issue books in the library', () => {
        Kingsley.handleRequest();
        expect(givenBook['Austin']).toContain('Alice');
    });
    test('Ensures an Admin cannot issue books not in the library', () => {
        Nnamdi.requestBook('Growth');
        Kingsley.handleRequest();
        expect(givenBook['Nnamdi']).not.toContain('Growth');
    });
    test('Ensures an Admin issues a book remaining one copy based on the first request from teachers', () => {
        Kingsley.addBook('World', 1);
        David.requestBook('World');
        Austin.requestBook('World');
        Kingsley.handleRequest();
        expect(givenBook['David']).toContain('World');
        expect(givenBook['Austin']).not.toContain('World');
    });
    test('Ensures an Admin issues a book remaining one copy based on the first request from Senior Students', () => {
        Kingsley.addBook('Ape Land', 1);
        Ekene.requestBook('Ape Land');
        Eniola.requestBook('Ape Land');
        Kingsley.handleRequest();
        expect(givenBook['Ekene']).toContain('Ape Land');
        expect(givenBook['Eniola']).not.toContain('Ape Land');
    });
    test('Ensures an Admin issues a book remaining one copy based on the first request from Senior Students', () => {
        Kingsley.addBook('Politics', 1);
        Nnamdi.requestBook('Politics');
        Dare.requestBook('Politics');
        Kingsley.handleRequest();
        expect(givenBook['Nnamdi']).toContain('Politics');
        expect(givenBook['Dare']).not.toContain('Politics');
    });
    test('Ensures an Admin issues a book remaining one copy to Teachers before students, even when the students ordered first', () => {
        Kingsley.addBook('Luminous', 1);
        Dare.requestBook('Luminous');
        Ekene.requestBook('Luminous');
        David.requestBook('Luminous');
        Kingsley.handleRequest();
        expect(givenBook['David']).toContain('Luminous');
        expect(givenBook['Ekene']).not.toContain('Luminous');
        expect(givenBook['Dare']).not.toContain('Luminous');
    });
    test('Ensures an Admin issues a book remaining one copy to Senior Students before Juniors, even when the Junior student ordered first', () => {
        Kingsley.addBook('Love', 1);
        Nnamdi.requestBook('Love');
        Eniola.requestBook('Love');
        Kingsley.handleRequest();
        expect(givenBook['Eniola']).toContain('Love');
        expect(givenBook['Nnamdi']).not.toContain('Love');
    });
});

describe('Test the returnBook function', () => {
    test('Test if a user can return Book borrowed back to the Library', () => {
        
    });    
});