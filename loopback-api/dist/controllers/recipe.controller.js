"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const services_1 = require("../services");
const rest_2 = require("@loopback/rest");
const Clarifai = require('clarifai');
/**
 * A simple controller to bounce back http requests
 */
let RecipeController = class RecipeController {
    constructor(req) {
        this.req = req;
        const clarifaiApp = new Clarifai.App({
            apiKey: '7c50821e761a48458922fec486e40a74'
        });
        clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, 'https://www.dinnerplanner.com/wp-content/uploads/2018/06/raw-chicken.jpg').then((response) => {
            console.log("Clarifai response:" + JSON.stringify(response));
        }).catch((err) => {
            console.log(err);
        });
    }
    // Map to `GET /getRecipes`
    getRecipes(ingredients) {
        console.log("---------------Ingredients:", ingredients);
        var ingredientArray = ingredients.split(',');
        return new services_1.GetRecipeFromIngredients().response(ingredientArray).then((apiResponse) => {
            return {
                apiResponse
            };
        });
    }
};
__decorate([
    rest_1.get('/getRecipes/{ingredients}'),
    __param(0, rest_2.param.path.string('ingredients')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RecipeController.prototype, "getRecipes", null);
RecipeController = __decorate([
    __param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    __metadata("design:paramtypes", [Object])
], RecipeController);
exports.RecipeController = RecipeController;
//# sourceMappingURL=recipe.controller.js.map