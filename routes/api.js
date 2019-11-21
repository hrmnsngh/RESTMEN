const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//Get a list of weather
router.get('/ninjas', function (req, res, next) {
    res.send({ type: 'GET' });
});

//Add a new weather to DB
router.post('/ninjas', function (req, res, next) {
    /*    var ninja = new Ninja(req.body);
       ninja.save(); */
    //altenate way 
    Ninja.create(req.body).then(function (ninja) {
        console.log(ninja);
        res.send(ninja);

    }).catch(function(e){
        console.log(e);
        res.status(422).send(e);
    });
    /*     console.log(req.body);
        res.send({
            type: 'POST',
            name: req.body.name,
            rank: req.body.rank
        }); */
});

//update a ninja in DB
router.put('/ninjas/:id', function (req, res, next) {
    res.send({ type: 'PUT' });
});

//Delete a ninja in DB
router.put('/ninjas/:id', function (req, res, next) {
    res.send({ type: 'DELETE' });
});

module.exports = router;