CREATE DATABASE TODOAPP;
use TODOAPP;
CREATE TABLE apprentices (
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);
use TODOAPP;
INSERT INTO apprentices (firstname, lastname) VALUES ("John", "Doe"), ("Jane", "Doe");
describe apprentices;