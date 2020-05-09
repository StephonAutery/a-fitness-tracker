// require express
var express = require("express");
// create a pointer to the express server
var app = express();
const mongoose = require("mongoose");

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// define the static path for express server
app.use(express.static("public"));

// set urlencoding, parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
// Heroku MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_cx59x5c3:mgt2lm80kott2k6hiens8dj34d@ds121190.mlab.com:21190/heroku_cx59x5c3",

{
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes.js"));

// start express app.
app.listen(PORT, function() {
console.log("App listening on: http://localhost:" + PORT);
});
