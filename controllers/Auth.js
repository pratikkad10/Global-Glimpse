const User=require('../models/User');

//signup view 
exports.signup=(req,res)=>{
    // res.send("form")
    res.render('users/signup.ejs');
}

exports.login=(req,res)=>{
    res.render('users/login.ejs');
}



//signup handler
exports.signupHandler=async (req,res)=>{
    try {
        let {username, email, password}=req.body;
        // res.locals.currUser = req.body || null;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            req.flash('error', 'User already exists! Please choose a different username.');
            return res.redirect('/user/signup');
        }

        const newUser= new User({email,username});
        const registeredUser=await User.register(newUser, password);

        req.login(registeredUser, (err)=>{
            if(err){
               return next(err);
            }
            req.flash("success", "Welcome to Global Glimpse");
            res.redirect('/listings');
            
        })

        
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/user/signup");
    }
}


//login Handler
exports.loginHandler=async (req,res)=>{
    req.flash("success", "Welcome to Global Glimpse!");
    let redirect_url=res.locals.redirectUrl || '/listings';  
    res.redirect(redirect_url);  
}