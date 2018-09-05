DROP DATABASE IF EXISTS BikePal_db;
CREATE DATABASE BikePal_db;

USE BikePal_db;

CREATE TABLE schedules 
(
    id int AUTO_INCREMENT NOT NULL ,
    class_date date NOT NULL,
    start_time time NOT NULL, 
    class_type varchar(255) NOT NULL, 
    class_level int NOT NULL,
    instructor varchar (255) NOT NULL, 
    seats int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE classRosters
(
    client_name varchar(255) NOT NULL,
    class_id int NOT NULL,
    PRIMARY KEY (client_name),
    FOREIGN KEY (class_id) REFERENCES schedules(id)
);

CREATE TABLE clients
(
    client_id int NOT NULL AUTO_INCREMENT,
    client_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL, 
    phone_number varchar(255) NOT NULL,
    reminder_optIn boolean DEFAULT true,
    waiver boolean NOT NULL,
    PRIMARY KEY (client_id),
    FOREIGN KEY (client_name) REFERENCES classRosters(client_name)
);
