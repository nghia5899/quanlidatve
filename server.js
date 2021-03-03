var express = require('express');

var database = require('./database')

var app = express();

app.get('/', function(req, res) {
    res.send('Xin chao');
});

app.get('/listtuyenxe', function(req, res) {
    database.getAll(function(results) {
        res.json(results)
    })
});

app.listen(process.env.PORT, function() {
    console.log('Node server running @ http://localhost:'+process.env.PORT);
});