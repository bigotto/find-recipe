const axios = require('axios');
const getGifs = require('./giphy');

const getRecipes = async ( ingredients ) => {
    const { data } = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients.join(',')}`);
    
    const recipes = data.results.map(item => {
        return {
            title: item.title,
            ingredients: item.ingredients.split(', '),
            link: item.href
        }
    })

    const gifsData = await Promise.all(recipes.map(recipe => {
        return getGifs(recipe.title);
    }))

    gifsData.map(({ data }, index) => {
        recipes[index].gif = data.data[0].images.original.url;
    })
    
    return recipes;
};

module.exports = getRecipes;