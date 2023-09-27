
// objects literals
let user = {
    name: 'fred',
    age: 30,
    email: 'emma@yahoo.com',
    location: 'berlin',
    blogs: ['rich daddy', 'rose in the garden', 'all is well']
};
console.log(user)
console.log(user.name)
console.log(user['name'])

console.log('*********** add method to objects *********') // add method to objects
let author = {
    name: 'fred',
    age: 30,
    email: 'emma@yahoo.com',
    location: 'berlin',
    blogs: [
        { title: 'rich daddy', likes: 30, author: 'jim ike' },
        { title: 'rich people', likes: 20, author: 'bruce lee' },
        { title: 'going up', likes: 60, author: 'power james' }
    ],
    login: () => console.log('the author is logged in'),
    logout: () => console.log('the author is logged out'),

    logBlogs: function () {
        this.blogs.forEach(blog => {
            console.log(blog.title, 'has', blog.likes, 'likes')
        })
    }
};
author.login();
author.logout();
author.logBlogs();


console.log('*********** math object *********') // math object
const depth = 55.6;
const size = 7.8;

console.log(Math)
console.log(Math.PI)
console.log(Math.round(size))
console.log(Math.floor(size))
console.log(Math.ceil(size))
console.log(Math.trunc(depth))


console.log('*********** generate random numbers *********') // generate random numbers
const randomNums = Math.random();
console.log(randomNums)
console.log(Math.round(randomNums * 100))


console.log('*********** primitive values *********') // primitive values
let scoreOne = 50
let scoreTwo = scoreOne
console.log(scoreOne, scoreTwo)
scoreOne = 100
console.log(scoreOne, scoreTwo)


console.log('*********** reference values *********') // reference values
let userOne = { name: 'dillion', age: 40 }
let userTwo = userOne
console.log(userOne, userTwo)
userOne.age = 80
console.log(userOne, userTwo)