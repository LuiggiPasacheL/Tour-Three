const query = require('../database/database')

module.exports = {
    create: async function (tarjetavalida) {
        let result = await query(`insert into tarjetavalida(nombre, numero, cvv, mes, año)
                            values ('${tarjetavalida.nombre}', '${tarjetavalida.numero}', '${tarjetavalida.cvv}',
                            '${tarjetavalida.mes}', '${tarjetavalida.año}')`);

         return result;
    },

}