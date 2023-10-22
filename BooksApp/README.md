A Book/Author Database management system developed using NodeJs and MySQL

From: https://www.devbabu.com/how-to-make-node-js-crud-application-with-mysql-database/

## Create a MySQL DataBase.

For testing purposes I am using GitHub CodeSpace and installed MySQL in the CodeSpace

    sudo apt update
    sudo apt install mysql-server
    sudo service mysql start
    service mysql status 

**NOTE: Each time the codespace is re-started mysql must be started**
 
    sudo mysql
    show databases;
    create database dev;
    show databases;

  

**Create an app user with enough privileges to manage 'dev' database**

    CREATE USER 'pingpong'@'localhost' IDENTIFIED WITH mysql_native_password BY 'QnDcsFvSNB2s8K';
    GRANT ALL PRIVILEGES ON dev.* TO 'pingpong'@'localhost' ;

    use dev;

    CREATE TABLE `books` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `title` varchar(100) NOT NULL,
     `content` tinytext NOT NULL,
     `author` varchar(20) NOT NULL,
     `created_at` TIMESTAMP DEFAULT current_timestamp,
     `updated_at` TIMESTAMP DEFAULT current_timestamp ON UPDATE current_timestamp,
     PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    
    show tables;
    describe books;


## NPM related steps

mkdir BooksApp     
cd BooksApp/
npm i express express-validator ejs mysql2 

npm init      
             
// I changed the entry point to be booksapp.js
entry point: (index.js) booksapp.js

// Add type module to the package.json
Add "type": "module", in package.json file, because we will use the es6 import in this project. Add this line after "main": "booksapp.js"

node booksapp.js   // browse to port 3000

