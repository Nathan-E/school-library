const User = require('../user');
const extend = require('../../../extend/extend');

//Teacher constructor function
function Teacher(name, id) {
    User.call(this, name, id);
    this.priority = '1';
}

//ensures prototype chaining to parent (User)
extend(Teacher, User);


module.exports = Teacher;
