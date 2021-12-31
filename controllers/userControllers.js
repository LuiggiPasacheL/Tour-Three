
const user = require('../models/user')

function index(req, res) {
    res.render('login')
}

async function login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let passwordDB = await user.get(username);

    if (!username || !password) {
        res.send('login failed');
    } else if (passwordDB &&  password === passwordDB) {
        req.session.user = username;
        req.session.session = true;
        res.send("login success!");
    }
}

module.exports = {
    login,
    index
}