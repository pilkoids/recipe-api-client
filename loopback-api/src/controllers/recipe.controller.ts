import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';

import { GetRecipeFromIngredients } from '../services';
import {param} from '@loopback/rest';

/**
 * A simple controller to bounce back http requests
 */

export class RecipeController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}


  // Map to `GET /ping`
  @get('/getRecipes/{ingredients}', {
    responses: {
      '200': "PING_RESPONSE",
    },
  })

  getRecipes(@param.query.string('ingredients') ingredients: string): any {
    console.log("---------------Ingredients:", ingredients);
    return new GetRecipeFromIngredients().response(["beef","rice"]).then((apiResponse)=>{
      return {
        apiResponse
      };
    })
  }
}
