window.onload = function () {

    function* gen() {
        let x = yield 'mangoes'
        let y = yield 'orange'
        let z = yield 'paw-paw'
        return x + y + z
    }

    let honda = gen()
    console.log(honda.next())
    console.log(honda.next(5))
    console.log(honda.next(10))
    console.log(honda.next(4))





}