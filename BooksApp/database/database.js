import mysql from "mysql2";

const connection = mysql.createPool({
    host: "localhost",
    user: "pingpong",
    password: "QnDcsFvSNB2s8K",
    database: "dev",
});

console.log("database")
export default connection.promise();
