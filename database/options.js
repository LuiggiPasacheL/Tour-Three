
require('dotenv').config();

var options = {
  host:      process.env.HOST,
  database:  process.env.DATABASE,
  user:      process.env.USERDB,
  password:  process.env.PASSWORDDB
};

module.exports = options;