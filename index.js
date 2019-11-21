const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');


const app = express();

//connect to mongoose
mongoose.connect('mongodb://localhost/ninja');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
//initialize routes
app.use('/api',routes);

app.listen(process.env.port || 4000, function(){
    console.log('Listening to port 4000 for requests');
});