const Senior = require('./senior');

const Dawid = new Senior('John', 4234);

//Checks if User is an Instance of Teacher
test('Checks if David is an Instance of Teacher', () => {
    expect(Dawid).toBeInstanceOf(Senior);
});
