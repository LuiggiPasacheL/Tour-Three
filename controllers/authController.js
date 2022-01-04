
function verifyAuth (req, res, next ){
    if (req.session && req.session.user && req.session.login)
        return next();
    else
        res.redirect('http://localhost:5000/login');
};

module.exports = {
    verifyAuth,
}