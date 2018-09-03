var db = require("../models");
var path = require("path");

var isAuthenticated = require('../helpers/isAuthenticated');

module.exports = function(app) {

  // Load About Us page
  app.get("/about", function(req, res) {
    res.render("about");
  });

  // Load Pricing page
  app.get("/pricing", function(req, res) {
    res.render("pricing");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  // When logout, reroute to index page
  app.get("/logout", function(req, res) {
    res.redirect("/");
  });

  // Load Sign Up page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load Members page
  app.get("/members", isAuthenticated, function(req, res) {
    res.render("members");
  });

  // Load Contact Us page
  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};