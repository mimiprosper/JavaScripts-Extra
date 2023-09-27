const names = ['pastor', 'Cross', 'william']
for (let i = 0; i < names.length; i++) {
    const name = names[i];

    console.log(name)
}

const password = 'entertained@';
if (password.length >= 8) {
    console.log('pass word is strong')
}
else {
    console.log('password is weak')
}

// logical operators ( OR || ), ( AND && )
if (password.length >= 8 && password.includes('@')) {
    console.log('pass word is good')
}
else {
    console.log('pass word is not accepted')
}

const color = 'blue & red'
if (color.length >= 20 || color.includes('pink')) {
    console.log('the right color')
} else {
    console.log('the wrong color')
}

// logical NOT, !
console.log(true);
console.log(!true);
console.log(false);
console.log(!false);


// break and continue
const scores = [10, 20, 5, 80, 60, 90, 30, 100]
for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    console.log('Your score is ' + scores[i])

    if (scores[i] === 60) {
        console.log('You have an average score')
        break;
    }

}


console.log('********* break out here ******************')
const tests = [10, 20, 5, 80, 60, 90, 30, 100]
for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    console.log('Your test is ' + tests[i])

    if (tests[i] === 60) {
        console.log('You have an average test')
        continue;
    }
}

// switch statements
const grade = 'C'

switch (grade) {
    case 'A':
        console.log('You have an A')
        break;
    case 'B':
        console.log('You have a B')
        break;
    case 'C':
        console.log('You have a C')
        break;
    case 'D':
        console.log('You have a D')
        break;
    case 'E':
        console.log('You have an E')
        break;

    default:
        console.log('Not a valid grade')
        break;
}