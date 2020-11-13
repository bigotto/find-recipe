const axios = require('axios');

const getGifs = ( title ) => {
    return axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${title}&limit=1`);
};

module.exports = getGifs;