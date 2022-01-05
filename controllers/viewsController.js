
module.exports = {

    index_pre: function (req, res) {
        res.render('index_pre');
    },

    index_post: function (req, res){
        res.render('index_post')
    },

    login: function (req, res){
        res.render('login');
    },

    registro: function (req, res){
        res.render('registro');
    },

    contacto: function (req, res){
        res.render('contacto');
    },

    terminos: function(req, res){
        res.render('terminos');
    },

    alquilar_1: function(req, res){
        res.render('alquilar_1');
    },

    alquilar_2: function(req, res){
        res.render('alquilar_2');
    },

    alquilar_3: function(req, res){
        res.render('alquilar_3');
    },

    alquilar_4: function(req, res){
        res.render('alquilar_4');
    },

    alquilar_5: function(req, res){
        res.render('alquilar_5');
    },

}