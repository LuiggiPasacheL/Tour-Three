let car = require('../models/car')
let distrito = require('../models/distrito')
let tarjetavalida = require('../models/tarjetavalida')
let pedido = require('../models/pedido')

module.exports = {

    alquilar_1: async function(req, res){
        let vehiculos = await car.getAll();
        console.log('vehiculos:', vehiculos)

        res.render('alquilar_1', {vehiculos});
    },

    alquilar_2: function(req, res){
        let vehiculo_id =  req.params.id;

        res.cookie('vehiculo_id',vehiculo_id);

        res.render('alquilar_2');
    },

    post_alquilar_3: function(req,res){
        console.log(req.body);
        let fecha_inicio = req.body.fecha_inicio;
        let hora_inicio = req.body.hora_inicio;
        let fecha_fin = req.body.fecha_fin;
        let hora_fin = req.body.hora_fin;

        res.cookie('fecha_inicio', fecha_inicio);
        res.cookie('hora_inicio', hora_inicio);
        res.cookie('fecha_fin', fecha_fin);
        res.cookie('hora_fin', hora_fin);

        res.send('cookies creadas')
    },

    alquilar_3: function(req, res){
        res.render('alquilar_3', {vehiculo_id: req.cookies.vehiculo_id});
    },

    post_alquilar_4: function (req,res) {
        let distrito_1 = req.body.distrito_1;
        let distrito_2 = req.body.distrito_2;
        let distrito_3 = req.body.distrito_3;

        res.cookie('distrito_1',distrito_1);
        res.cookie('distrito_2',distrito_2);
        res.cookie('distrito_3',distrito_3);

        res.send('cookies creadas')
    },

    alquilar_4: function(req, res){
        res.render('alquilar_4');
    },

    post_alquilar_5: async function(req, res){

        const objtarjetavalida = {
            nombre: req.body.nomTarjeta,
            numero: req.body.numTarjeta,
            cvv: req.body.cvv,
            mes: req.body.mesTarjeta,
            año: req.body.añoTarjeta
        }

        const objDistrito = {
            nomDistrito1: req.cookies.distrito_1,
            nomDistrito2: req.cookies.distrito_2,
            nomDistrito3: req.cookies.distrito_3,
        }

        
        const distrito_id = (await distrito.create(objDistrito)).id;

        await tarjetavalida.create(objtarjetavalida);

        const objPedido = {
            usuario_id: res.locals.user.id,
            distrito_id,
            vehiculo_id: req.cookies.vehiculo_id,
            fch_inicio: req.cookies.fecha_inicio,
            hor_inicio: req.cookies.hora_inicio,
            fch_fin: req.cookies.fecha_fin,
            hor_fin: req.cookies.hora_fin
        }
        console.log(objPedido)
        await pedido.create(objPedido)
    },

    alquilar_5: async function(req, res){

        let vehiculo_id = req.cookies.vehiculo_id;
        let vehiculo_aux = await car.getForId(vehiculo_id);
        let vehiculo_img = vehiculo_aux.img
        let detalles_alquiler = {
            vehiculo_id,
            vehiculo_img,
            fecha_inicio: req.cookies.fecha_inicio,
            hora_inicio: req.cookies.hora_inicio,
            fecha_fin: req.cookies.fecha_fin,
            hora_fin: req.cookies.hora_fin,
            distrito_1: req.cookies.distrito_1,
            distrito_2: req.cookies.distrito_2,
            distrito_3: req.cookies.distrito_3
        }

        res.render('alquilar_5', detalles_alquiler);

        //TODO: Borrar cookies
    },
}