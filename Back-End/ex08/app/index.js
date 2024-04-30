const express = require('express');

const app = express();


app.use('/api/category', require('./routes/category'))
app.use('/api/user/:name', require('./routes/user'))

module.exports = app;