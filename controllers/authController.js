
function verifyAuth (req, res, next ){
    if (req.session && req.session.user && req.session.login)
        return next();
    else
        return res.sendStatus(401);
};

module.exports = {
    verifyAuth,
}