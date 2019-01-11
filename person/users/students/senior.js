const Student = require('./student');
const extend = require('../../../extend/extend');

function Senior(name, type){
    Student.call(this, name, type);
}

extend(Senior, Student)

module.exports = Senior;