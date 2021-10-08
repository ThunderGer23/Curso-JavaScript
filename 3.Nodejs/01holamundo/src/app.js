'use strict';
// require-
const express = require('express');
const morgan = require('morgan');

//initializations-
const app = express();

//settings-

app.use(express.json());

//middleware configurations
app.use(morgan('dev'));

//Global variables

//routes-
app.all('/', (req, res, next) => {
    console.log('Entra aquí :v');
    next();
});

app.get('/login/:user', (req, res) => {
    console.log(req.params.user);
    res.send('Login success');
});

app.post('/login', (req, res) => {
    console.log(req.body.name);
    res.send('Login success');
});


//public static
app.use(express.static('src/public'));

//start server-
app.listen(3000, () => {
    console.log('listening on port 3000');
});