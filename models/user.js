const database = require('../database')

module.exports ={
    create: async function (data){
        return await database.query(`INSERT INTO users() VALUES()`);
    }
}