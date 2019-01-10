const User = require('./user')
const extend = require('./extend')

//Teacher constructor (Parent function)
function Teacher(name, type) {
    User.call(this, name);
    this.type = type
}

extend(Teacher, User)

module.exports = Teacher;