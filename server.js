var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Car = require('./api/models/carModel'); 
var routes = require('./api/routes/carRoutes'); 

var app = express();
var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    //console.log('req:', req);
    //console.log('res:', res);
    next(); // make sure we go to the next routes and don't stop here
});

app.use(express.static('public'))

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var mongoDB = mongoose.connect('mongodb://test:password@ds133964.mlab.com:33964/streamcarapi', {
    useMongoClient: true
});
mongoDB
    .then(function (db) {
        console.log('mongodb has been connected');
    })
    .catch(function (err) {
        console.log('error while trying to connect with mongodb');
    });

module.exports = mongoDB;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route
app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('RESTful API server started on: ' + port);