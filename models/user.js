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

    getLastId: async function (){
        let id = await query('SELECT id FROM usuario order by id desc limit 1');
        return id[0].id;
    }
}
