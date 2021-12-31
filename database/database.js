
const util = require('util');
const mysql = require('mysql');
const options = require('./options');

var pool = mysql.createPool(options);

pool.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('La conexion a la base de datos se realizó correctamente');
});

const query = util.promisify(pool.query);

module.exports = query;