<?php
require_once("db.php");
$get=$_GET;
$userid = $get['userid'];
$password=$get['password'];
$password=md5($password);//括号别忘加
//下面那句话$前面不能加var
//print_r(1);
$sql ="insert into signup(
	userid,
	password
)values(
	'{$userid}',
	'{$password}'
)";
//echo $sql;
$result=$dbh -> exec($sql);
print_r($result);
//echo "注册成功";
?>