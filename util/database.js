const mysql = require('mysql');

const config = require('../config/config.json');

const db = mysql.createConnection({
    host: config.host || "localhost",
    user: config.user || "root",
    password: config.password || "",
    database: config.database || "quanlidatve",
});

db.connect(function(err) {
    if (err) {
        console.log("error " + err)
        return
    }
})

module.exports = db;

