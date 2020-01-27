/// <reference types="express" />
import { Request } from '@loopback/rest';
/**
 * A simple controller to bounce back http requests
 */
export declare class RecipeController {
    private req;
    constructor(req: Request);
    getRecipes(ingredients: string): any;
}
