const Student = require('./student');

const John = new Student('John', 4234);

//Checks if John is an Instance of Student
test('Checks if John is an Instance of Student', () => {
    expect(John).toBeInstanceOf(Student);
});
