A Book/Author Database management system developed using NodeJs and MySQL

From: https://www.devbabu.com/how-to-make-node-js-crud-application-with-mysql-database/

mkdir BooksApp     // The Project directory
cd BooksApp/
npm i express express-validator ejs mysql2      // This creates node_modules

npm init      // Fill in the questions as desired
              // This generates package-lock.json & package.json
// I changed the entry point to be booksapp.js
entry point: (index.js) booksapp.js


Add type module to the package.json

Add "type": "module", in package.json file, because we will use the es6 import in this project. Add this line after "main": "booksapp.js"

node booksapp.js   // browse to port 3000