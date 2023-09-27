window.onload = function(){

    function loginNinja(name, age){
        console.log(`My name is ${name} and my age is ${age}`)
    }
    loginNinja('great', '20')

    
    let str = 'Greatman '

    console.log('****** repeat ********') // repeat
    console.log(str.repeat(5))

    console.log('****** startsWith ********') // startsWith
    console.log(str.startsWith('Great', 0)) //starts with G at index 0

    console.log('****** endsWith ********') // endsWith
    console.log(str.endsWith('t'))

    console.log('****** includes ********') // includes
    console.log(str.includes('man'))

}