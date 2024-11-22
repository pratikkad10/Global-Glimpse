const express = require('express');  
const app = express();


const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const path = require('path');
require('dotenv').config();  
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const session = require('express-session'); 
const flash = require('connect-flash');


//passport
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/User');

app.use(express.static(path.join(__dirname, "/public")));

//Used to Crete layout 
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);



//session
const sessionOptions = {
    secret: process.env.SESSION_SECRET || 'defaultsecret', // Use a secret from environment variables
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure cookies in production
        maxAge: 1000 * 60 * 60 * 24, // 1 day
    }
};






// DB connection
const dbConnect = require('./config/database');  
dbConnect();


//passport configuration
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes and Mount routes  
const airRoutes = require('./routes/air');
const usersRoute = require('./routes/User');
app.use("/", airRoutes);  
app.use("/user", usersRoute);  

// Default route (home page)
app.get('/', (req, res) => {
    res.send("<h1>This is home page</h1>");
});


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});







