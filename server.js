const express = require('express');
const routes = require('./routes/router');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);

app.listen(port, function() {
    console.log('Node server running @ http://localhost:'+port);
});