<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>وبگو | بررسی و ثبت اطلاعات کاربر</title>
<!-- http://webgoo.ir -->
<style type="text/css">
body{
    font-family:Tahoma, Geneva, sans-serif;
    font-size:12px;
    direction:rtl;
}
</style>
</head>
<body>
<?php
//اطلاعات اتصال به پایگاه داده
$con = mysql_connect("localhost", "root", "")
or die(mysql_error());   
//نام دیتابیس
mysql_select_db("pars1", $con)
or die(mysql_error());
//دریافت و تعریف متغیر ها
$username = $_POST['username'];
$password = $_POST['password'];
//پیش فرض
$check_error = 0;
//بررسی معتبر بودن اطلاعات ارسالی کاربر
//نام کاربری
if (!isset($username) || $username == ''){
    echo "فیلد نام کاربری نباید خالی باشد!";
    $check_error = 1;
}
//کلمه عبور
elseif (!isset($password) || $password == ''){
    echo "فیلد کلمه عبور نباید خالی باشد!";
    $check_error = 1;
}
//مجاز بودن انتخاب حروف انگلیسی به عنوان نام کاربری
elseif (preg_match('/^[a-zA-Z0-9 _-]+$/', $username) === 0){
    echo "نام کاربری دارای کاراکترهای غیر مجاز است!";
    $check_error = 1;
}
//جلوگیری از نفوذ به دیتابیس
$username = mysql_real_escape_string($username);
$password = md5($password);
if ($check_error != 1){
//در این مرحله اطلاعات را در دیتابیس ذخیره خواهیم کرد
mysql_query("INSERT INTO register (username,password) VALUES('$username','$password')")
or die(mysql_error());
echo "عضویت شما با موفقیت انجام شد!<br />";
}
//پایان ارتباط با پایگاه داده  
mysql_close($con);
?>
</body>
</html>