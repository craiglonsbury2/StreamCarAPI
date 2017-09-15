'use strict';

var mongoose = require('mongoose');
//var Task = mongoose.model('Tasks');
var Car = mongoose.model('Cars');


exports.list_all_cars = function(req, res) {
  Car.find({}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.create_a_car = function(req, res) {
  console.log()
  var new_car = new Car(req.body);
  new_car.save(function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.delete_a_car = function(req, res) {
  Car.remove({
    _id: req.params.carID
  }, function(err, car) {
    if (err)
      res.send(err);
    res.json({ message: 'Car successfully deleted' });
  });
};

