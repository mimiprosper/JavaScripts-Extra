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
            resolve(`${recipe2.publisher} : ${recipe2.title}`);
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
            resolve(`${recipe.publisher}: ${recipe.title}`);
        }, 1500);
    });

};

// consume promises : async-await method
getRecipeID = async() => {
     const IDs = await getIDs;    
     console.log(IDs);  

     const related = await getRelated();
     console.log(related);

     const recipe = await getRecipe();
     console.log(recipe);
}

getRecipeID();
