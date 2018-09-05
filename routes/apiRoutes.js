// Dependencies
var db = require("../models");
var path = require("path");

var isAuthenticated = require('../helpers/isAuthenticated');

module.exports = function (app) {

  // GET route to load data from Schedules model to index page
  app.get("/", function (req, res) {

    db.Schedules.findAll({}).then(function (results) {

      res.render("index", {
        schedules: results
      });
    });
  });

  // POST route to create a new reservation
  app.post("/api/reservation", function(req, res) {

    db.classRoster.create({
      client_name: req.body.client_name,
      class_id: req.body.class_id
    }).then(function (dbReservation) {
      res.json(dbReservation);
    });
  });
};