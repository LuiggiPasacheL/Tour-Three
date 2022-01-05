const query = require('../database/database')

module.exports ={

    create: async function (username, password){
        return await query(`INSERT INTO usuario(email, password) VALUES('${username}', '${password}')`);
    },

    get: async function (username){
        let data = await query(`SELECT * FROM usuario where email='${username}' LIMIT 1`);
        return data;
    },

    getForId: async function (id){
        let data = await query(`SELECT * FROM usuario where id='${id}' LIMIT 1`);
        return data;
    },
}
