var cars = require('../models/cars');

module.exports = {
  index: function(req, res, next) {
    // in case there aren't any filters
    var filteredCars = cars;

    // filter year
    if (req.query.year) {
      var year = parseInt(req.query.year);
      filteredCars = filteredCars.filter((car) => car.year === year);
    }

    if (req.query.style_gte) {
      var style_gte = parseFloat(req.query.style_gte);
      filteredCars = filteredCars.filter((car) => car.style >= style_gte);
    }

    res.status(200).json(filteredCars);
  },

  show: function(req, res, next) {
    var carId = parseInt(req.params.id);
    res.status(200).json(cars[carId]);
  },

  create: function(req, res, next) {
    cars.push(req.body);
    res.status(200).json(cars);
  },

  update: function(req, res, next) {
    // assumes all the keys of a car are updated/provided
    cars[req.params.id] = req.body;
    res.status(200).json(cars[req.params.id]);
  },

  destroy: function(req, res, next) {
    var splicedCars = cars.splice(req.params.id);
    var deletedCar = splicedCars[0];
    res.status(200).json(deletedCar);
  }
};