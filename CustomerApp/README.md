Example from: https://github.com/fazt/crud-nodejs-mysql/tree/master

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
    CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
    );
    
    show tables;
    describe customer;

## NPM related steps.

    Change directory to where CustmerApp code sits.
    
    cd CustomerApp
    npm init
    add "type": "module", to package.json
    npm install express mysql body-parser
    npm install morgan
    npm install ejs
    node index.js


> Written with [StackEdit](https://stackedit.io/).