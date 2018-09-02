// Dependencies
var db = require("../models");
var path = require("path");

var isAuthenticated = require('../helpers/isAuthenticated');

module.exports = function(app) {

  // GET route to load data from Schedules model to index page
  app.get("/", function(req, res) {

    db.Schedules.findAll({}).then(function(results) {
      
      res.render("index", {
        schedules: results
      });
    });
  });

  // // PUT route to update seat count
  // app.put("/api/schedules/:id", function(req, res) {
  //   db.Schedules.update(req.body, {
  //     where: {
  //       seats: req.body.seats
  //     }
  //   }).then(function(dbSeats) {
  //     res.json(dbSeats);
  //   })
  // });
  
};