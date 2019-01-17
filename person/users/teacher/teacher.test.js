const Teacher = require('./teacher');

const David = new Teacher('David', 2345);

//Checks if David is an Instance of Teacher
test('Checks if David is an Instance of Teacher', () => {
    expect(David).toBeInstanceOf(Teacher);
});
