

// create promise
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([23, 34, 56, 67]);
    }, 1500);
});

// create promise
const getRelated = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const recipe2 = {
                title: "italian pizza",
                publisher: "Dilly"
            }
            resolve(`${recipe2.publisher}: ${recipe2.title}`);
        }, 1500);
    });
};

// create promise
const getRecipe = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const recipe = {
                title: "tomato paste",
                publisher: "Goodman"
            }
            resolve(` ${recipe.publisher}: ${recipe.title}`);
        }, 1500);
    });

};

// comsume promise - chaining
getIDs
.then( IDs => {
    console.log(IDs);
    return getRecipe();
})
.then( recipe => {
    console.log(recipe);
    return getRelated();
})
.then( recipe2 => {
    console.log(recipe2);
})
.catch( err => {
    console.error(err);
});