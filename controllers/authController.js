
function verifyAuth (req){
    return (req.session && req.session.user && req.session.client);
}

function ifFalseRedirectLogin (req, res, next ){
    if (verifyAuth(req))
        return next();
    else
        res.redirect('http://localhost:5000/login');
};

function ifTrueRedirectInicio (req, res, next){
    if (verifyAuth(req))
        res.redirect('http://localhost:5000/index_post');
    else
        return next();
}

module.exports = {
    ifFalseRedirectLogin,
    ifTrueRedirectInicio
}