# BikePal

## About the Application
BikePal is a full-stack application using the MVC design pattern, which divides an application into three interconnected parts:
* **Models**: uses models created with Sequelize to query and manipulate the data from the MySQL database
* **Controllers**: used to control the data flow into model object and update the view whenever data changes (ex. db.Schedules.findAll({}) or db.classRoster.create({})
* **Views**: used handlebars to manage the HTML templating  
*App also used a Node and Express Web server*

## GET and POST routes

### GET Route was used to retrieve data from the Schedules table and to display the data on the index page 
![Main Page Screencap](https://image.ibb.co/icsC0K/Main_Page.png)  
*1. Schedule data is rendered on the index page*   

![Schedules Screencap](https://image.ibb.co/bO2jEe/Schedules_Table.png)  
*2. Schedule table displays data with the seeds*

### POST Route was used to add new data (reserve a class) by adding the data to the classRosters table
![Adding Class Reservation Screencap](https://image.ibb.co/bvto7z/Adding_Reservation.png)  
*1. Member makes a reservation*

![Class Reservation Made Screencap](https://image.ibb.co/gGDMSz/Reservation_Made.png)  
*2. Modal pops up that a reservation has been made*

![classRoster Table](https://image.ibb.co/nsmmue/Class_Roster_Table.png)  
*3. Database shows new reservation was added*

