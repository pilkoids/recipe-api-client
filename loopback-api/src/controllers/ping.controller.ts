import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';

import { GetRecipeFromIngredients } from '../services';

/**
 * A simple controller to bounce back http requests
 */

export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}


  // Map to `GET /ping`
  @get('/ping', {
    responses: {
      '200': "PING_RESPONSE",
    },
  })

  ping(): any {
    return new GetRecipeFromIngredients().response(["beef","rice"]).then((apiResponse)=>{
      return {
        apiResponse
      };
    })
  }
}
