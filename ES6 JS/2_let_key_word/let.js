window.onload = function(){
    var x = 10;

    if(x>5){
        let x = 5 // let overrides var
        console.log('inside', x)
    }
    console.log('outsider', x)

    var items = document.querySelectorAll('li')
    for(let x = 0; x < items.length; x++){
        items[x].onclick = function(){
            console.log(x)
        }
    }
}