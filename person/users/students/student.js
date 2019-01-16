const User = require('../user');
const extend = require('../../../extend/extend');


//Student constructor function
function Student(name, id) {
    User.call(this, name, id);
}

//ensures prototype chaining to parent (User)
extend(Student, User);

module.exports = Student;
