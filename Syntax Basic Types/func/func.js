// arguments & parameters
const speak = function(time, name){
    console.log('Good', time , name, );
};
speak('day', 'mario');


// regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2
// }

// const area = calcArea(5)
// console.log('Area is', area)

console.log('****** arrow function ********') // arrow function

const calcArea = radius => 3.14 * radius**2
const area = calcArea(5)
console.log('Area is', area)

const bill = (products, tax) => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total
}
console.log(bill([10,15,30], 0.2)) // array of products & tax


console.log('****** methods ********') // methods
const student = 'greggory';
capStudent = student.toUpperCase();
console.log(capStudent)

// function
const greet = () => 'hello';
let gudmorning = greet();
console.log(gudmorning);

console.log('****** callbacks & foreach ********') // callbacks & foreach 
let people = ['paul', 'obiyo', 'chidi', 'dubem', 'amadi'];
people.forEach(person => {
     console.log(person);
});

console.log('****** callbacks & foreach ********') // callbacks & foreach 
const logPerson = (person, index) => {
    console.log(index, 'hello' , person)
}
people.forEach(logPerson); 