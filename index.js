const express = require('express');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// Middleware (app.use instances): 
app.use(express.static('public'));
// Body Parser
app.use(express.json());
// Route Handler Initialize routes 
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
