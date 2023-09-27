const personOne = {
    name: 'success',
    age: 45,
    address: {
        city: 'aba',
        state: 'abia'
    }
}

const personTwo = {
    name: 'Samson',
    age: 35,
    address: {
        city: 'owerri',
        state: 'imo'
    }
}

// destructuring - using default values
const { name: firstName, age, height = 'six feet'} = personOne; // renamimg = (name: firstName), assigning = (height = "six feet")
console.log(firstName, 'is', age, 'years and',  height, 'tall');

const { address: {city} } = personTwo; // nested property - address: {city}
console.log(city);



// old school
const printUser = user => {
    console.log(`Name is ${user.name} and Age is ${user.age}`)
}
printUser(personOne)

// destructuring & using default values
const printAdmin = ({name, age, color = 'dark', address: {city}}) => {
    console.log(`Name is ${name} and Age is ${age} and ${color}, and lives in ${city}`);
}
printAdmin(personTwo);
