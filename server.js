const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/index_routes');
const path = require('path');

require('dotenv').config()

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.json());

route(app);

app.listen(port, function() {
    console.log('Node server running @ http://localhost:'+port);
});