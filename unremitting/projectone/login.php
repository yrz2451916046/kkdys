<?php
//require_once("db.php");
//$get = $_GET;
//$userid = $get["userid"];
//$password = $get["password"];
////$password = md5($password);
//
//$sql = "select * from signup where userid = '{$userid}'";
//$select = $dbh -> query($sql);
//$user=[];
//	foreach ($select as $row){
//		$user = $row;
//	}
//	print_r ($user[0]);
//	if(empty($user)){
//		echo "用户名不存在";
//		echo "<a href='login.html'>返回登录</a>";
//		return false;
//	}
//	echo "<pre>";
//$dbpassword = $user['password'];
//$dbuserid = $user['userid'];
//if(md5($password) == $dbpassword){
//	echo '登陆成功,3秒后自动跳转！';
////	$_SESSION['name'] = $user['name'];
////	print_r($_SESSION);
//	
//}else{
//	echo "密码错误";
//	echo "<a href='login.html'>返回登录</a>";
//}


require_once("db.php");
$get = $_GET;
$userid = $get['userid'];
$password = $get['password'];

$sql = "select * from signup where userid = '{$userid}'";
$select = $dbh->query($sql);
$user = [];
    foreach ($select as $row) {
       $user = $row;
    }

    if(empty($user)){
       echo "用户名不存在";
       echo "<a href='login.html'>返回登录</a>";
       return false;
    }

    echo "<pre>";
$dbpassword = $user['password'];
//echo md5($password);
//echo $dbpassword;
if (md5($password) == $dbpassword) {
    echo "登录成功！";
//  $_SESSION['name'] = $user['name'];
//  $_SESSION['status'] = $user['status'];
//  print_r($_SESSION);
//  header("Location:changetwo.php");
    
    //echo "此刻的状态".$status[$_SESSION['status']];
}else{
    echo "密码错误";
}
