const express = require('express');
const mongoose = require('mongoose');

//Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/trainingDB',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=> console.log('connection successful'));

const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/bookRouter');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//initialize routes
app.use('/api',routes);

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});