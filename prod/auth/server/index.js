const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const http = require('http');
const app = express();
const router = require('./router');


app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}))
router(app);


const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port,()=>{
    console.log('server is listening on port',port);

});




