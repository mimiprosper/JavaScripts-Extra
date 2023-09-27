// Promise example 1
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
});

//comsume promise
p.then(message => {
    console.log('this is the then ' + message);
}).catch(message => {
    console.log('this is the catch ' + message);
});

// Promise example 2
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 recorded')
});
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
});
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
});

// consume promise
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages);
})

// consume promise - returns based on speed rate
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})
