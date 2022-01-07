const car = require('../models/car')

module.exports = {
    getAll: function (req,res) {
        let cars = car.getAll();

        console.log(cars)
    }
}