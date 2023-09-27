class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('emma@yahoo.com', 'emma');
var userTwo = new User('john@hotmail.com', 'john');

console.log(userOne);
console.log(userTwo);