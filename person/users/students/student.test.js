const Student = require('./student');

const John = new Student('John', 4234);

//Checks if User is an Instance of Teacher
test('Checks if David is an Instance of Teacher', () => {
    expect(John).toBeInstanceOf(Student);
});
