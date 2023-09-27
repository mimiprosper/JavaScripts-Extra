// old school method
const alphabet = ['A', 'B', 'C', 'D', 'E'];
const numbers = [1, 2, 3, 4, 5, 6, 7];
//const a = numbers[3];
//const b = alphabet[0];


// modern way - destructuring
const [a, b] = numbers;
console.log(a); 
console.log(b);

// get the 1st & 3rd element skipping the 2nd element in the array
const[d,,f] = numbers;
// console.log(d);
// console.log(f);

// spread operator - skip the 1st, 2nd, 3rd elements & print the rest
const[g,h,, ...rest] = numbers;
console.log(rest);

// spread operator - to add two arrays
const newArray = [...numbers, ...alphabet]
// console.log(newArray);