'use strict';

const mysql = require('mysql2');
const { credentials } = require("./keys");

const dbConnection = mysql.createConnection(credentials);

dbConnection.connect((err) => {
  if (err) throw err;

  console.log('Database Connected!');
});

module.exports = dbConnection;