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

  // app.put("/:id", (req, res) => {

  //   var id = req.params.id;
  //   console.log("id", id);

  //   db.Schedules.update(req.body, 
      
  //     {
  //       where: {
  //         seats: req.params.seats
  //       }
  //   }).then(function(results) {
  //       res.redirect(results);
  //   });

  // });
  
};