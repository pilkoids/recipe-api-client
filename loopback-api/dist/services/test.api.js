"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unirest = require("unirest");
//https://rapidapi.com/spoonacular/api/recipe-food-nutrition
class TestApi {
    response() {
        return new Promise((resolve, reject) => {
            var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");
            req.query({
                "q": "How much vitamin c is in 1 orange"
            });
            req.headers({
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "QIiovCTHWrmshe86Hfn2WFwYBPrZp1MqwVTjsnBYXNuAy0zGFS"
            });
            req.end(function (res) {
                if (res.error)
                    throw new Error(res.error);
                console.log(res.body);
                resolve(res.body);
            });
        });
    }
}
exports.TestApi = TestApi;
//# sourceMappingURL=test.api.js.map