const Student = require('../student');
const extend = require('../../../../extend/extend');

//Junior constructor function
function Junior(name, id) {
    Student.call(this, name, id);
    this.priority = '3';
}

//ensures prototype chaining to parent (Student)
extend(Junior, Student)

module.exports = Junior;
