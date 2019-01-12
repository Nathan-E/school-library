const Student = require('./student');
const extend = require('../../../extend/extend');

//Junior constructor function
function Junior(name, type){
    Student.call(this, name, type);
}

//ensures prototype chaining to parent Student
extend(Junior, Student)

module.exports = Junior;