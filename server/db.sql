CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    emailAddress VARCHAR(100) NOT NULL UNIQUE,
    passwordHash VARCHAR(255) NOT NULL,
    country VARCHAR(100)
);

-- Create a new database
CREATE DATABASE weather_faq;

-- Use the database
USE weather_faq;

-- Create a table to store frequently asked questions
CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT,
  link VARCHAR(255)
);