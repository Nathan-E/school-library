//User constructor (Parent function)
function User(name, type) {
    this.name = name,
    this.type = type
}

//Ensures Prototype Chaining
function extend (Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child; 
}

// module.exports = User, extend;

module.exports = {User, extend};