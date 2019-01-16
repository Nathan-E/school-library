const Student = require('../student');
const extend = require('../../../../extend/extend');

//Senior constructor function
function Senior(name, id) {
    Student.call(this, name, id);
    this.priority = '2';
}

//ensures prototype chaining to parent (Student)
extend(Senior, Student);

module.exports = Senior;
