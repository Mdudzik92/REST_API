const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// Setting up our GET request to perform queries to return only the ninjas that are near to us based on the parameters we provide in the GET request (in Postman)
// ====================================================
// Get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
    Ninja.aggregate()
    .near({
        near: {
            type: "Point",
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
            distanceField: dis,
            maxDistance: 100000,
            spherical: true
        })
        .then(function(ninjas) {
            res.send(ninjas);
        })
    });

// Add a new ninja to the db
router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// Update a ninja in the db
router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
});

// Delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next) {
    Ninja.findOneAndDelete({_id: req.params.id}).then(function(ninja){
     res.send(ninja);
    });
});

module.exports = router;


// router.get('/ninjas', function(req, res, next) {
//     /* Ninja.find({}).then(function(ninjas){
//         res.send(ninjas);
//     }); */
//     Ninja.aggregate().near({
//         // Grabbing ninja by coordinates, turning coordinates from string into number with parseFloat
//         near: 
//         {
//             type: "Point",
//             coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]}, // parse the query strings into floating point numbers
//         // Ninjas within 100,000 meters
//         distanceField: "dis",
//         maxDistance: 100000, 
//         spherical: true, // counts distance based on sphere shape
//     }
//     ).then(function(ninjas) {
//         res.send(ninjas); // return matching ninjas to client
//     }).catch(next);
// });