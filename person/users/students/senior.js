const Student = require('./student');
const extend = require('../../../extend/extend');

//Senior constructor function
function Senior(name, type){
    Student.call(this, name, type);
}

//ensures prototype chaining to parent Student
extend(Senior, Student)

module.exports = Senior;