let second = () => {
    setTimeout(() => {
        console.log('async : comes 3s later');
    }, 3000);
}

let first = () => {
    console.log("FIRST");
    second();
    console.log("SECOND");
}

first();