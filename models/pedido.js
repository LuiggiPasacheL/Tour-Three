const query = require('../database/database')

module.exports = {
    create: async function (pedido) {
        let result = await query(`insert into pedido
                                (usuario_id, distrito_id, vehiculo_id, fch_inicio, hor_inicio, fch_fin, hor_fin) 
                                values(
                                ${pedido.usuario_id}, ${pedido.distrito_id}, ${pedido.vehiculo_id},
                                '${pedido.fch_inicio}', '${pedido.hor_inicio}', '${pedido.fch_fin}', 
                                '${pedido.hor_fin}')`)

        return result;
    }
}