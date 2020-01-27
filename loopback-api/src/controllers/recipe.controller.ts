import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';

import { GetRecipeFromIngredients } from '../services';
import {param} from '@loopback/rest';

/**
 * A simple controller to bounce back http requests
 */

export class RecipeController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}


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
