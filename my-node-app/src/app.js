require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const { 
  MYSQL_HOST,
  MYSQL_USER, 
  MYSQL_PASSWORD, 
  MYSQL_DATABASE 
} = require('../constants/database');

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

connection.connect();

const app = express();
const PORT = 3000;

app.get('/', (_, res) => res.send('My Simple App'));

app.listen(
  PORT,  
  () => console.log(`Server is running at port ${PORT}`)
);