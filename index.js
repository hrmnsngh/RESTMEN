const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api')

const app = express();

app.use(bodyParser.json());
//initialize routes
app.use('/api',routes);

app.listen(process.env.port || 4000, function(){
    console.log('Listening to port 4000 for requests');
});