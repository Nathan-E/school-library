const Person = require('./person');

const David = new Person('David', 2345);

//Checks if David is an Instance of Teacher
test('Checks if David is an Instance of Teacher', () => {
    expect(David).toBeInstanceOf(Person);
});
