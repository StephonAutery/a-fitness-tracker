// require express
var express = require("express");
// create a pointer to the express server
var app = express();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// define the static path for express server
app.use(express.static("public"));

// set urlencoding, parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// use mongoose
const mongoose = require("mongoose");
// mongoose
// Local host MongoDB connection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
// Heroku MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://stephona:get1onit@ds121190.mlab.com:21190/heroku_cx59x5c3",
{
    useNewUrlParser: true,
    useFindAndModify: false
});

// load routes
app.use(require("./routes/apiRoutes.js"));

// start express app.
app.listen(PORT, function() {
console.log("App listening on: http://localhost:" + PORT);
});