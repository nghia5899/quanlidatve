var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quanlidatxe'
})

var connect = function() {
    connection.connect(function(err) {
        if (!err) {
            console.log('Database is connected!!!')
        } else {
            console.log('Database connect error')
        }
    })
}

var closeDb = function() {
    connection.end(function(err) {
        if (!err) {
            console.log('close Db')
        }
    })
}

exports.connect = connect;

exports.getAll = (callBackQuery) => {
    connect();
    connection.query('select * from tuyenxe', function(err, results, fields) {
        if (!err) {
            callBackQuery(results);
        } else {
            console.log(err);
        }
    })
}