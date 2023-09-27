// async returns promises and NOT values
const add = async (a, b) => {
    sum = await a + b

    setTimeout(() => {
        console.log(sum);
    }, 5000);
}

add(2, 3)

console.log('Be patient, answer be out in some seconds....');

