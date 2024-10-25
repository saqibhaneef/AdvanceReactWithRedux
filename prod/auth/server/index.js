const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const http = require('http');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//db setup
mongoose.connect('https://localhost:27017')

//app setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}))
router(app);

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port,()=>{
    console.log('server is listening on port',port);

});




