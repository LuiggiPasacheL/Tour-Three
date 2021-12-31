
const util = require('util');
const mysql = require('mysql');
const options = require('./options');

var pool = mysql.createPool(options);

const query = util.promisify(pool.query).bind(pool);

async function verifyDataBase() {
  let result = await query('SELECT 1 + 1 AS solution');
  if (result[0].solution == '2') {
    console.log('La conexion a la base de datos se realizó correctamente');
  }
  else {
    console.log('Error en la base de datos');
  }
}
try {
  verifyDataBase();
} catch (error) {
  console.error(error);
}


module.exports = query;