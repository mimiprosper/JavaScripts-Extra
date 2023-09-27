// define a promise
// promise states - pending, rejected, resolved


let fetchSomeData = new Promise((resolve, reject) => {
    let allGood = true
    if (allGood) {
        resolve({
            id: 1,
            message: "nice work"
        })
    } else {
        reject("error fetching data")
    }
});

// consume the promise
fetchSomeData.then(fetchedData => {
    console.log('then :', fetchedData);
}).catch((error) => {
    console.log('catch :', error);
})
