# Bike Pal

## About the Application
BikePal is a full-stack application using the MVC design pattern, which divides an application into three interconnected parts:
* Models: uses models created using Sequelize to query and manipulate the data from the MySQL database
* Controllers: used to control the data flow into model object and update the view whenever data changes (ex. db.Schedules.findAll({}) or db.classRoster.create({})
* Views: used handlebars to manage the HTML templating
* App also used a Node and Express Web server

## GET and POST routes

### GET Route was used to retrieve data from the Schedules table and to display the data on the index handlebars
![Main Page Screencap](https://image.ibb.co/icsC0K/Main_Page.png)

### POST Route was used to add new data (reserve a class) by adding the data to the classRosters table
![Member Page Screencap](https://image.ibb.co/dCrpfK/Members_Page.png)

