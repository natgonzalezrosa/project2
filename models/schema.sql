DROP DATABASE IF EXISTS BikePal_db;
CREATE DATABASE BikePal_db;

USE BikePal_db;

CREATE TABLE schedule 
(
    id int NOT NULL AUTO_INCREMENT,
    class_time varchar(255) NOT NULL, 
    class_name varchar(255) NOT NULL, 
    teacher_name varchar (255) NOT NULL, 
    capacity int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE class_roster 
(
    id int NOT NULL AUTO_INCREMENT,
    client_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL, 
    firstTime boolean NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES schedule(id)
);

