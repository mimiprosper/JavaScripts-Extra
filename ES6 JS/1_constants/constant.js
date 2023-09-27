window.onload = function() {
    const pi = 3.14
    console.log(pi)

    function calcArea(R){
        let solution = pi * R**2
        console.log("The Area is", solution)
    }
    calcArea(5)
}

