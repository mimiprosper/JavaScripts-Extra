class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    logout(){
        console.log(this.email, 'just logged OUT');
    }
    login(){
        console.log(this.email, 'just logged IN')
    }
}

var userOne = new User('emma@yahoo.com', 'emma');
var userTwo = new User('john@hotmail.com', 'john');

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();