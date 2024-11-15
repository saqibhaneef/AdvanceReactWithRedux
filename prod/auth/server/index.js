const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const http = require('http');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//db setup
mongoose.connect(
    "mongodb://127.0.0.1:27017/auth",
    (err, data) => {
        if(err){
            console.log(err || data);
        }
        if(data){
            console.log("mongodb connected");
        }
    }
  );




//app setup
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}))
router(app);

//server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port,()=>{
    console.log('server is listening on port',port);

});




