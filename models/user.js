const database = require('../database/database')

module.exports ={

    create: async function (username, password){
        return await database.query(`INSERT INTO users(username, password) VALUES('${username}', '${password}')`);
    },

    get: async function (username){
        let data = await database.query(`SELECT * FROM users where username='${username} LIMIT 1'`)[0];
        return data;
    }

}