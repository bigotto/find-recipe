const getRecipes = require("../services/recipepuppy");
// const getGifs2 = require("../services/giphy");

module.exports = {
    async find(req, res) {
        const answer = {};

        const ingredientsParams = req.query.i;
        if(!ingredientsParams){
            return res.status(400).json({
                "message": "Need to type some ingredients to search"
            });
        }
        const ingredients = ingredientsParams.split(',');
     
        if(ingredients.length > 3 )
            return res.status(400).json({
                "message": "Number max of ingredients allowed is three"
            });
        
        answer.keywords = ingredients;
        try{
            answer.recipes = await getRecipes(ingredients);
            res.json(answer);
        } catch(error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
};
