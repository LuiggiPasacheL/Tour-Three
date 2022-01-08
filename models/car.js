const query = require('../database/database');

module.exports = {
    getForId: async function (id) {
        let cars = await query(`Select * from vehiculo where id=${id}`);
        return cars[0];
    },

    getAll: async function () {
        let cars = await query('select * from vehiculo');
        return cars
    },
}