module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect('/listings');
    })
}