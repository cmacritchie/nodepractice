const express = require('express');
//const hbs = require('handlebars'); //view engine
const hbs = require('hbs');

var app = express();

app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/views'));




//html by defaule
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

//send json
app.get('/', (req, res) => {
    res.send({
        name:'craig',
        lastName: 'macRitchie'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle:"Craigs about page",
        year: new Date().getFullYear()
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});