const Senior = require('./senior');

const Dawid = new Senior('John', 4234);

//Checks if Dawid is an Instance of Senior
test('Checks if Dawid is an Instance of Senior', () => {
    expect(Dawid).toBeInstanceOf(Senior);
});
