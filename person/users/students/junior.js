const Student = require('./student');
const extend = require('../../../extend/extend');

//Junior constructor function
function Junior(name, type){
    Student.call(this, name, type);
    this.priority = '3';
}

//ensures pro totype chaining to parent Student
extend(Junior, Student)

module.exports = Junior;