var db = require("../models");
var path = require("path");

var isAuthenticated = require('../helpers/isAuthenticated');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load About Us page
  app.get("/about", function(req, res) {
    res.render("about");
  });

  // Load Pricing page
  app.get("/pricing", isAuthenticated, function(req, res) {
    res.render("pricing");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// module.exports = function (app) {

//   app.get("/", (req,res)=>{
//       if(req.user){
//           res.redirect('members')
//       };
//       res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", (req,res)=>{
//       if(req.user){
//           res.redirect('members')
//       };
//       res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   app.get("/members",isAuthenticated, (req,res)=>{
//       res.sendFile(path.join(__dirname, "../public/members.html"));
//   })



// }