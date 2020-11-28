const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// Middleware: Body Parser & Route Handler (Initialize routes is the Route Handler in this instance)
app.use(express.json());
// Initialize routes 
app.use('/api', require('./routes/api'));
// Error Handling Middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Now listening for requests");
});
