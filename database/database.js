
const util = require('util');
const mysql = require('mysql');
require('dotenv').config();

var pool = mysql.createPool({
  host:      process.env.HOST,
  database:  process.env.DATABASE,
  user:      process.env.USERDB,
  password:  process.env.PASSWORDDB
});

pool.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  console.log('Conexion a la base de datos correcta');
});

const query = util.promisify(pool.query);

module.exports = query;