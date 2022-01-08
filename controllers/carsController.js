const car = require('../models/car')

module.exports = {
    getAll: async function (req,res) {
        let cars = await car.getAll();

        return cars;
    },
}