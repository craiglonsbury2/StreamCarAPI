'use strict';
// module.exports = function(app) {
//   var cars = require('../controllers/carController');

//   // Routes
//   app.route('/cars')
//     .get(cars.list_all_cars)
//     .post(cars.create_a_car);


//   app.route('/cars/:carId')
//     .delete(cars.delete_a_car);
// };

module.exports = function(app) {
  var cars = require('../controllers/carController');

  app.route('/cars')
    .get(cars.list_all_cars)
    .post(cars.create_a_car);

  app.route('/cars/:carID')
    .delete(cars.delete_a_car);
};