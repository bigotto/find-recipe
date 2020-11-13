const getRecipes = require("../services/recipepuppy");
// const getGifs2 = require("../services/giphy");

module.exports = {
    async find(req, res) {
        const answer = {};
        const ingredientsParams = req.query.i;
        const ingredients = ingredientsParams.split(',');

        if(ingredients.length >= 3 )
            return res.status(400).json({
                "message": "Number max of ingredients allowed is three"
            });
        
        answer.keywords = ingredients;
        answer.recipes = await getRecipes(ingredients);
        
        res.json(answer);
    }
}