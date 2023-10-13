show databases;

create database dev;

show databases;

use dev;

CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` tinytext NOT NULL,
  `author` varchar(20) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
); 

show tables;

describe books ;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| id         | int          | NO   | PRI | NULL              | auto_increment    |
| title      | varchar(100) | NO   |     | NULL              |                   |
| content    | tinytext     | NO   |     | NULL              |                   |
| author     | varchar(20)  | NO   |     | NULL              |                   |
| created_at | timestamp    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| updated_at | timestamp    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+
6 rows in set (0.00 sec)


Create a user for this table

CREATE USER 'pingpong'@'localhost' IDENTIFIED WITH mysql_native_password BY 'QnDcsFvSNB2s8K';

GRANT ALL PRIVILEGES ON dev.* TO 'pingpong'@'localhost

FLUSH PRIVILEGES;

mysql -upingpong -p
