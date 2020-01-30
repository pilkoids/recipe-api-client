import {Request, RestBindings, get, ResponseObject, FindRouteProvider} from '@loopback/rest';
import {inject} from '@loopback/context';

import { GetRecipeFromIngredients } from '../services';
import {param} from '@loopback/rest';

const Clarifai = require('clarifai');

/**
 * A simple controller to bounce back http requests
 */

export class RecipeController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {
    const clarifaiApp =  new Clarifai.App({
      apiKey:'7c50821e761a48458922fec486e40a74'
    });

    clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, 'https://www.dinnerplanner.com/wp-content/uploads/2018/06/raw-chicken.jpg').then((response:any)=> {
      console.log("Clarifai response:"+JSON.stringify(response));
    }).catch((err:any) => {
      console.log(err);
    });

  }


  // Map to `GET /getRecipes`
  @get('/getRecipes/{ingredients}')
  getRecipes(@param.path.string('ingredients') ingredients: string): any {
    console.log("---------------Ingredients:", ingredients);
    var ingredientArray = ingredients.split(',');

    return new GetRecipeFromIngredients().response(ingredientArray).then((apiResponse)=>{
      return {
        apiResponse
      };
    })
  }
}
