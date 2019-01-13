const User = require('../user');
const extend = require('../../../extend/extend');


//Student constructor function
function Student(name, type) {
    User.call(this, name);
    this.type = type
}

//ensures prototype chaining to parent Student
extend(Student, User);

module.exports = Student;