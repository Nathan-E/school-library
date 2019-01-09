require('./user');

//Tests the Library Function
describe('1. Tests the User Module', () => {
    test('User constructor', () => {
        const obj = new User('Chibueze', 'Admin');
        expect(obj.name).toBe('Chibueze');
        expect(obj.type).toBe('Admin');
    });
});
