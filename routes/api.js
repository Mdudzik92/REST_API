const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();
const ninja = require('../models/ninja');

// Get a list of ninjas from the db
router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'});
});

// Add a new ninja to the db
router.post('/ninjas', function(req, res) {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});

// Update a ninja in the db
router.put('/ninjas/:id', function(req, res) {
    res.send({type: 'PUT'});
});

// Delete a ninja from the db
router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;