const express = require('express');
const router = express.Router();

//Get a list of weather
router.get('/ninjas', function (req, res) {
    res.send({ type: 'GET' });
});

//Add a new weather to DB
router.post('/ninjas', function (req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        data: req.body
    });
});

//update a ninja in DB
router.put('/ninjas/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

//Delete a ninja in DB
router.put('/ninjas/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router;