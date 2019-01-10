const User = require('./user');
const extend = require('./extend');

//Teacher constructor (Parent function)
function Student(name, type) {
    User.call(this, name);
    this.type = type
}

extend(Student, User);

module.exports = Student;