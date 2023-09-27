window.onload = function(){

    let morning = name => console.log(`${name} said gudmorning`)
    morning('john')

    let ninja = {
        name: 'james',
        chop(x){
            window.setInterval(() => {
                if(x > 0){
                    console.log(`${this.name} chopped the enemy`)
                    x--
                }
            }, 1000)
        }
    }
    ninja.chop(5)
}