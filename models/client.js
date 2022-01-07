const query = require('../database/database')

module.exports ={
    getForUserId: async function (userId){
        let client = await query(`SELECT * FROM cliente WHERE usuario_id=${userId} limit 1`)
        return client;
    },

    getForId:  async function (id){
        let client = await query(`SELECT * FROM cliente WHERE usuario_id=${id}`)
        return client;
    },

    create: async function (client){
        await query(`INSERT INTO cliente(nombre, apellido, telefono, pais, ciudad, codPostal, usuario_id) VALUES
                    ('${client.nombre}','${client.apellido}','${client.telefono}', '${client.pais}', '${client.ciudad}',
                    '${client.codPostal}','${client.usuario_id}')`);
    },

}
