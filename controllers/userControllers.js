
const user = require('../models/user')
const client = require('../models/client')

async function getForId(req, res) {
    let id = req.params.id;
    if(id){
        let userid = await user.getForId(id);
        res.send(userid);
    }else{
        res.send('id no existe');
    }
}

async function login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        res.send('credenciales vacias');
        return;
    } 

    let userDB = await user.get(username);
    if(!(userDB[0])){
        res.send('usuario no existe');
        return;
    }

    let clientDB = await client.getForUserId(userDB[0].id);
    if(!(clientDB[0])){
        res.send('cliente no existe');
        return;
    }

    let passwordDB = userDB[0].password;
    if (passwordDB &&  password === passwordDB) {
        req.session.user = userDB[0];
        req.session.client = clientDB[0];
        console.log('sesion creada');
        res.redirect('/')
    } else{
        res.send('credenciales incorrectas');
    }
}

function logout (req, res) {
    req.session.destroy();
    res.redirect('/');
    console.log('sesion terminada');
};

async function register (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    try {

        await user.create(username, password);
        let lastid = await user.getLastId();

        let formClient = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            pais: req.body.pais,
            ciudad: req.body.ciudad,
            codPostal: req.body.codPostal,
            usuario_id: lastid
        }

        await client.create(formClient)
        await login(req, res);

    } catch (error) {
        console.log(error)
        res.redirect('.')
    }
}


module.exports = {
    login,
    logout,
    register,
    getForId,
}
