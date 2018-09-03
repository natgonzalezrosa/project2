var mailgun = require('../config/mailgun');
var key = mailgun.key;
var domain = mailgun.domain;
var contact = mailgun.contact;

console.log(mailgun, key, domain);

module.exports = function (app) {

    app.post("/api/contact", function (req, res) {
        var mailgun = require('mailgun-js')({
            apiKey: key,
            domain: domain
        });

        var data = {
            from: 'Bike-Pal.com <info@bike-pal.com>',
            to: contact,
            subject: req.body.subject,
            text: req.body.message + " Contact email: " + req.body.contact
        };

        mailgun.messages().send(data, function (error, body) {
            console.log(body);
        });
    });

}