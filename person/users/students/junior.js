const Student = require('./student');
const extend = require('../../../extend/extend');

function Junior(name, type){
    Student.call(this, name, type);
}

extend(Junior, Student)

module.exports = Junior;