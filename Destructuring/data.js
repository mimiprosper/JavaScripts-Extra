 // destructuring
 const [name, age] = ['john', 45]; 
 console.log(name, age);

const person = {
    firstName: 'john',
    lastName: 'okoro'
};

// destructuring
const {firstName, lastName} = person;
const {firstName: a, lastName: b} = person;

console.log(a);
console.log(b);

const calculateRetirementAge = yearOfBirth => {
    const age = new Date().getFullYear() - yearOfBirth;
    return [age, 65 - age]; // 65 - age is number of service years
}

const [currentAge, serviceYears] = calculateRetirementAge(1990)
// console.log(currentAge);
// console.log(serviceYears);

