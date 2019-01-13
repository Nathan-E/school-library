const Person = require('../person');
const extend = require('../../extend/extend');
const requestCatalog = require('../../request_file/request');
const details = require('../../request_file/requestDetails');
const library = require('../../library/library');
const givenBooks = require('../../borrower_catalog/givenBooks');


//User constructor (Parent function), givenBooks holds the books collected by the user
function User(name) {
    Person.call(this, name);
    givenBooks[this.name] = [];
}

//ensures prototype chaining to parent Person
extend(User, Person);



//request function sent the book requested to the bookRequest array
User.prototype.requestBook = function (book) {
    that = this;
    //check if the request is from a Teacher and then pushes the request to bookRequest Teacher's array
        if (this.type == 'Teacher') {
            let found = requestCatalog['Teachers'].find( function (element) {
                return element[0] == that.name && element[1] == book;
            });

            if(!found) {
                requestCatalog['Teachers'].push([this.name, book]);
            }            
        }
        //check if the request is from a Senior and then pushes the request to bookRequest Senior's array
        if (this.type == 'Senior') {
            let found = requestCatalog['Seniors'].find( function (element) {
                return element[0] == that.name && element[1] == book;
            })
        
            if(!found) {
                requestCatalog['Seniors'].push([this.name, book]);
            }
        }
        //check if the request is from a Junior and then pushes the request to bookRequest Junior's array
        if (this.type == 'Junior') {
            let found = requestCatalog['Juniors'].find( function (element) {
                return element[0] == that.name && element[1] == book;
            })
        
            if(!found) {
                requestCatalog['Juniors'].push([this.name, book]);
            }
        }

}

//returns Book to the library and remmoves it from givenBook record
User.prototype.returnBook = function (book) {
    //checks if the user was given the book 
    if (givenBooks[this.name].includes(book)) {
        const a = givenBooks[this.name].indexOf(book);
        //removes the book from the list of books given to the user
        givenBooks[this.name].splice(a, 1);
        //add the book back to the library
        library[book]++;
        if (this.type == 'Teacher') {
            for(let i =0 ; i < requestCatalog['Teachers'].length; i++){
                if (requestCatalog['Teachers'][i][0] == this.name && requestCatalog['Teachers'][i][1] == book){
                    requestCatalog['Teachers'].splice(i, 1);
                }
            }
        }
        //check if the request is from a Senior and then pushes the request to bookRequest Senior's array
        if (this.type == 'Senior') {
            for(let i =0 ; i < requestCatalog['Seniors'].length; i++){
                if (requestCatalog['Seniors'][i][0] == this.name && requestCatalog['Seniors'][i][1] == book){
                    requestCatalog['Seniors'].splice(i, 1);
                }
            }
        }
        //check if the request is from a Junior and then pushes the request to bookRequest Junior's array
        if (this.type == 'Junior') {
            for(let i =0 ; i < requestCatalog['Juniors'].length; i++){
                if (requestCatalog['Juniors'][i][0] == this.name && requestCatalog['Juniors'][i][1] == book){
                    requestCatalog['Juniors'].splice(i, 1);
                }
            }
        }
        return `${this.name} returned ${library[book]}`;
    } 
    // if the user was not given the book, tells the user that the book is not from the library
    else {
        return `${this.name}, ${book} is not from the Library`;
    }
}


module.exports = User;