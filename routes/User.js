const express=require('express');
const router=express.Router();
const passport = require('passport');

//import controller
const {signup, signupHandler, login, loginHandler}=require('../controllers/Auth');
const {logout}=require('../controllers/logout');
const { saveRedirectUrl } = require('../middleware/login');

router.get('/signup', signup);
router.get('/login', login);
router.post('/signup', signupHandler);
router.post('/login',saveRedirectUrl ,
            passport.authenticate('local', { failureRedirect: '/user/login', failureFlash:true }),
            loginHandler);
router.get('/logout', logout);


module.exports=router;