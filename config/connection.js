// Set up MySQL connection.
var mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });

};

connection.connect(function(error) {
    if (error) {
        console.log("error connection: ", error.stack);
        return;
    }

    console.log("connection.js: connected as id " + connection.threadId + "\n");
});

// module.exports.connection = connection;
module.exports = connection;