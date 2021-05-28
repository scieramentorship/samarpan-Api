'use strict';
const mysql = require('mysql');
const config = require('./config');

//local mysql db connection
const dbConn = mysql.createConnection(config.databaseOptions);

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;