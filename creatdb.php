<?php
//اطلاعات اتصال به پایگاه داده
$con = mysql_connect("localhost", "root", "")
or die(mysql_error());
//نام دیتابیس
mysql_select_db("db", $con)
or die(mysql_error());
//ایجاد جدول و ردیف با دستور CREATE TABLE
mysql_query("CREATE TABLE register(
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
name VARCHAR(255),
lname VARCHAR(255),
email VARCHAR(255),
username VARCHAR(255),
password VARCHAR(255)) ENGINE=MyISAM ")
or die(mysql_error());
//پایان ارتباط با پایگاه داده
mysql_close($con);
?>
