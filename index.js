const express = require('express');
const app = express();
// use dotenv
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log('Server running on port 3000');
})