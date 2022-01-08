const query = require('../database/database')

module.exports = {
    create: async function (distrito) {
        let result = await query(`insert into distrito(nomDistrito1,nomDistrito2,nomDistrito3)
         values ('${distrito.nomDistrito1}', '${distrito.nomDistrito2}', '${distrito.nomDistrito3}')`)

        let id = await query("SELECT max(id) as id from distrito");
        return id[0];
    },

}