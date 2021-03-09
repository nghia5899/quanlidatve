const mysql = require('mysql');

const config = require('../config/config.json');

const db = mysql.createConnection({
    host: config.host || "localhost",
    user: config.user || "root",
    password: config.password || "",
    database: config.database || "quanlidatve",
});

module.exports = db;

