window.onload = function(){

    let meats = ['chicken', 'beef', 'ham']
    console.log(...meats)

    let num1 = [1,2,3]
    let num2 = [...num1,4,5,6]
    console.log(num2)

    let numbers = [1,2,3,4]
    function addNumbers(a,b,c,d){
        console.log(a+b+c+d)
    }
    addNumbers(...numbers)

}