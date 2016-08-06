'use strict'

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let http = require('http');

let app = express();
let env = app.get('env');
app.set('views', path.join(__dirname, 'views'));
app.set('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static('./assert'));

// Handle all request
app.get('/all', function (req, res) {
  res.send('Hello World')
})

http.createServer(app).listen(9999);
console.log('Get rolling succcess');