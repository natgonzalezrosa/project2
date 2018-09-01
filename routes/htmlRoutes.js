var db = require("../models");
var path = require("path");

var isAuthenticated = require('../helpers/isAuthenticated');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    db.Schedules.findAll({}).then(function(results) {
      
      res.render("index", {
        schedules: results
      });

    });

  });

  // Load About Us page
  app.get("/about", function(req, res) {
    res.render("about");
  });

  // Load Pricing page
  app.get("/pricing", function(req, res) {
    res.render("pricing");
  });

  app.get("/login", isAuthenticated, function(req, res) {
    res.render("login");
  });

  // When logout, reroute to index page
  app.get("/logout", function(req, res) {
    res.render("index");
  });

  // Load Sign Up page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load Members page
  app.get("/members", function(req, res) {
    res.render("members");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};