import { AnyType } from "@loopback/repository";

var unirest = require("unirest");
//https://rapidapi.com/spoonacular/api/recipe-food-nutrition


export class GetRecipeFromIngredients {
  response(ingredients: Array<String>) {

    return new Promise((resolve, reject) => {
      const incredientListString = ingredients.map(ingredient => 
        ingredient + '%2C');

      new Promise((resolve, reject) =>{
        var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=" + incredientListString);

        req.query({
          "q": "How much vitamin c is in 1 orange"
        });

        req.headers({
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "QIiovCTHWrmshe86Hfn2WFwYBPrZp1MqwVTjsnBYXNuAy0zGFS"
        });
        
        
        req.end(function (res: any) {
          if (res.error) throw new Error(res.error);
        
          console.log(res.body);
          resolve(res.body);
        });
  
      }).then((recipes: any) =>{
        let recipeIds: Array<string> = [];
        recipes.map((recipe: { id: string; }) => 
          recipeIds.push(recipe.id)
        );
        const idString: string = recipeIds.join('%2C');
        var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids="+ idString);

        req.query({
          "q": "How much vitamin c is in 1 orange"
        });
  
  
        
        req.headers({
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "QIiovCTHWrmshe86Hfn2WFwYBPrZp1MqwVTjsnBYXNuAy0zGFS"
        });
        
        
        req.end(function (res: any) {
          if (res.error) throw new Error(res.error);
        
          //console.log(res.body);
          resolve(res.body);
        });
      });
    });
  }
}
  