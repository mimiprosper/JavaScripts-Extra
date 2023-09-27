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

// inheritance
class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('emma@yahoo.com', 'emma');
var userTwo = new User('john@hotmail.com', 'john');
var admin = new Admin('admin@gmail.com', 'joe');
var users = [userOne, userTwo, admin] 

admin.deleteUser(userOne);
console.log(users)
