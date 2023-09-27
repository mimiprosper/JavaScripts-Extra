
let fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('processing data complete');
            resolve({
                id: 1,
                message: 'nice job'
            })
        }, 2000);
    });
}

// parsed the data
let parseData = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parseOutput = `parsed the data for id: ${data.id} with message: ${data.message}`
            resolve({
                parsed: parseOutput
            })
        }, 2000);
    });
};

// echo the data
let echoData = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data.parsed);
        }, 2000);
    })
}

// chaining the promise  
fetchData().then(parseData).then(echoData).catch((err) => {
    console.error(err);
})