
const user = require('../models/user')

function index(req, res) {
    res.render('login')
}

async function login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let userDB = await user.get(username);
    let passwordDB = userDB[0].password;

    if (!username || !password) {
        res.send('credenciales vacias');
    } else if (passwordDB &&  password === passwordDB) {
        req.session.userid = userDB[0].id;
        req.session.login = true;
        res.send("credenciales correctas");
    } else{
        res.send('credenciales incorrectas');
    }
}

function logout (req, res) {
    req.session.destroy();
    res.send("salida correcta");
};

async function register (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    try {
        let result = await user.create(username, password);
        res.send('Registrado correctamente')
    } catch (error) {
        console.log(error)
        res.send('Error al registro')
    }
}


module.exports = {
    login,
    logout,
    register,
    index
}