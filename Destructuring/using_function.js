// old school
const sumAndMultiply = (a, b) => {
    return [a+b, a*b]
};

const result = sumAndMultiply(2,3);
console.log(result);


// destructuring - ES6
const [sum, multiply, division = 'no results to display'] = sumAndMultiply(4, 5);
console.log(sum, multiply, division);
