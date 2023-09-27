class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    logout(){
        console.log(this.email, 'just logged OUT');
        // method chaining
        return this;
    }
    login(){
        console.log(this.email, 'just logged IN')
        // method chaining
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        // method chaining
        return this;
    }
}

var userOne = new User('emma@yahoo.com', 'emma');
var userTwo = new User('john@hotmail.com', 'john');

console.log(userOne);
console.log(userTwo);

userOne.login().updateScore().updateScore().logout();
