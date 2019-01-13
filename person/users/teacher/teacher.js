const User = require('../user');
const extend = require('../../../extend/extend');

//Teacher constructor function
function Teacher(name, type) {
    User.call(this, name);
    this.type = type;
}

//ensures prototype chaining to parent Student
extend(Teacher, User);


module.exports = Teacher;