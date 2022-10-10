

var express = require('express');


var app = express();


app.get('/', function(req, res, next) {
    res.send('<h1>simple</h1>')
})

app.listen(4000);
console.log('app is listen on port 4000')