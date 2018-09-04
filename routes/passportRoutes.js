var db = require("../models");
var passport = require("../helpers/passport.js");

module.exports = function (app) {
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json("/members");
    })

    app.post("/api/signup", (req, res) => {
        db.User.create({
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });

    app.get("/api/userData", (req, res) => {
        if (!req.user) {
            res.json({ "message": "unauth access" });
        }
        else {
            res.json({
                firstName: req.user.firstName,
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
};