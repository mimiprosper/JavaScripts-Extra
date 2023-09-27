// result = 'The blog has ' + likes + ' likes';
// console.log(result);


const title = 'The gods are not to blame';
const author = 'Zulu Sofa';
const likes = 30;

// template string way... problem need to be resolved
console.log(`The blog called ${title} by ${author} has ${likes} likes`);

// array methods
let ninjas = ['mike', 'paul', 'kelvin'];
let outcome = ninjas.join(', ');
console.log(outcome);


let deal = ninjas.concat(['peter', 'josh']);
console.log(deal);