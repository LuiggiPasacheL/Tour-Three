const query = require('../database/database')

module.exports ={

    create: async function (username, password){
        return await query(`INSERT INTO usuarios(username, password) VALUES('${username}', '${password}')`);
    },

    get: async function (username){
        let data = await query(`SELECT * FROM usuarios where username='${username}' LIMIT 1`);
        return data;
    },

}