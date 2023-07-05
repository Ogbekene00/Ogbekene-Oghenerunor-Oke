
require('dotenv').config();
// import the express module
const express = require('express');
// create the express app
const app=  express();

const connectDB = require('./server/db');
connectDB()

app.set('view engine', 'ejs');
// define the port
const port = 5008 || process.env.PORT
// define the listening port
// define your route
app.get('/oke', (req, res) => {
    // res.send('Hello everyone')
    res.render('index');
})
app.listen(port, () => {
    console.log(`App is listening port ${port}`);
})