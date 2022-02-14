const path = require('path');
const express = require('express');
const morgan = require('morgan');


const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

// HTTP Logger
app.use(morgan('combined'));


// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('home'));
// app.get('news', (req, res) => res.render('home'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})