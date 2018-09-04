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

  app.post("/api/reserveClass", (req, res) => {
    db.ClassRoster.create({
      client_name: req.body.client_name,
      client_id: req.body.client_id
    }).then(() => {
      alert("Test");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

};