
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
    }

}