// callback hell

getRecipe = () => {

    setTimeout(() => {
        recipeID = [12, 24, 45, 56];
        console.log(recipeID);

        setTimeout( id => {
            const recipe = {
                title: "freash tomato paste",
                publisher: "jonas"
            }
            console.log(`${id} : ${recipe.title}`);
    
            setTimeout( publisher => {
                const recipe2 = {
                    title: "italian pizza",
                    publisher: "jude"
                }
                console.log(`${publisher} : ${recipe2.title}`);

            }, 1500, recipe.publisher);

        }, 1500, recipeID[2]);

    }, 2000);
   
}

getRecipe();