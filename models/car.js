const query = require('../database/database');

module.exports = {
    getForId: function (id) {
        let cars = query(`Select * from vehiculo where id=${id}`);
        return cars[0];
    },

    getAll: function () {
        let cars = query('select * from vehiculo');
        return cars[0]
    },
}