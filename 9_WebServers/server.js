const express = require('express');

var app = express();

app.use(express.static(__dirname + '/pages'));




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
    res.send('About page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});