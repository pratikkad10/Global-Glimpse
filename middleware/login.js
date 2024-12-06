module.exports.isLoggedIn= (req,res,next)=>{
    console.log(req.path, "......", req.originalUrl);
    

    console.log("req.user from middleware isloggedin ",req.user);
    res.locals.currUser = req.user || null;
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to access this page.");
        return res.redirect('/user/login');  
    }
    next();
}


module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl; 
    }
    next();
}