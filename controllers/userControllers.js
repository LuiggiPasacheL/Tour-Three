
const user = require('../models/user')

async function getForId(req, res) {
    let id = req.params.id;
    if(id){
        let user = await user.getForId(id);
        res.send(user);
    }else{
        res.send('id no existe');
    }
}

async function login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        res.send('credenciales vacias');
    } else{

        let userDB = await user.get(username);
        let passwordDB = userDB[0].password;

        if (passwordDB &&  password === passwordDB) {
            req.session.userid = userDB[0].id;
            req.session.login = true;
            console.log('sesion creada userid:', req.session.userid , 'login:', req.session.login);
            res.redirect('/')
        } else{
            res.send('credenciales incorrectas');
        }
    }
     
}

function logout (req, res) {
    req.session.destroy();
    res.redirect('/')
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
    getForId,
}