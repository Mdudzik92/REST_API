const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.json());

// Initialize routes 
app.use('/api', require('./routes/api'));

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Now listening for requests");
});
