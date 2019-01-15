const User = require('../user');
const extend = require('../../../extend/extend');

//Teacher constructor function
function Teacher(name) {
    User.call(this, name);
    this.priority = '1';
}

//ensures prototype chaining to parent (User)
extend(Teacher, User);


module.exports = Teacher;
