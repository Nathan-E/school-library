const User = require('./user');
const Admin = require('./admin');
const Person = require('./person');
const Teacher = require('./teacher');
const Student = require('./student');
const Senior = require('./senior');
const Junior = require('./junior');

//Tests the Person Function
describe('1. Tests the Person Module', () => {
    test('Person constructor', () => {
        const obj = new Person('Zik');
        expect(obj.name).toBe('Zik');
    });
});

//Tests the Admin Function
describe('2. Tests the Admin Module', () => {
    test('Admin constructor', () => {
        const obj = new Admin('Zik', 'Admin');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Admin');
    });
});

//Tests the Teacher Function
describe('3. Tests the Teacher Module', () => {
    test('Teacher constructor', () => {
        const obj = new Teacher('Zik', 'Teacher');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Teacher');
    });
});

//Tests the User function
describe('4. Tests the User Module', () => {
    test('User constructor', () => {
        const obj = new User('Chibueze', 'Admin');
        expect(obj.name).toBe('Chibueze');
    });
});

//Tests the Student Function
describe('5. Tests the Student Module', () => {
    test('Student constructor', () => {
        const obj = new Student('Zik', 'Teacher');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Teacher');
    });
});

//Tests the Senior Function
describe('5. Tests the Senior Module', () => {
    test('Senior constructor', () => {
        const obj = new Senior('Zik', 'Senior');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Senior');
    });
});

//Tests the Junior Function
describe('5. Tests the Junior Module', () => {
    test('Junior constructor', () => {
        const obj = new Junior('Zik', 'Junior');
        expect(obj.name).toBe('Zik');
        expect(obj.type).toBe('Junior');
    });
});