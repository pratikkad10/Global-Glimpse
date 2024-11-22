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

app.use(express.static(path.join(__dirname, "/public")));

//Used to Crete layout 
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);




// DB connection
const dbConnect = require('./config/database');  
dbConnect();

// Routes
const airRoutes = require('./routes/air');
// Mount routes  
app.use("/", airRoutes);  

// Default route (home page)
app.get('/', (req, res) => {
    res.send("<h1>This is home page</h1>");
});


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});







