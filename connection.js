var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bedbc9cc7d11fa',
    password: '0a93b38cd911cf',
    database: 'heroku_1141cf6ca7b533b'
    //user : 'root', 
    //  password : 'root123',  
    //database: 'brain_toaster',
    // host: "127.0.0.1"

});

connection.connect(function(error) {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log('Connecting.... ');
});

module.exports = connection;