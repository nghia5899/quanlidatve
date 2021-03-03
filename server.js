var express = require('express');

var database = require('./database')

var app = express();

app.get('/listtuyenxe', function(req, res) {
    database.getAll(function(results) {
        res.json(results)
    })
})
console.log('sua doi');
app.listen(3000, function() {
    console.log('Node server running @ http://localhost:8888')
})