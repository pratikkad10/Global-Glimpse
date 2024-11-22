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
        const newUser= new User({email,username});
        const registeredUser=await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "Welcome to Global Glimpse");
        res.redirect('/listings');
        
        
    } catch (error) {
        // req.flash("error", error.message);
        res.redirect("/user/signup");
    }
}


//login Handler
exports.loginHandler=async (req,res)=>{
    try {
        
        res.send("Welcome to Global Glimpse!!");

    } catch (error) {
        console.log(error);
    }
}