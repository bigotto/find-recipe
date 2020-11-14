require('dotenv').config();
const app = require('./app');

const port = 3333;

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});
