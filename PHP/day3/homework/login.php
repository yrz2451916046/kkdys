<?php
require_once("db.php");
$post = $_POST;
$name = $post['name'];
$password = $post['password'];

$sql = "select * from shujukuu1 where name = '{$name}'";
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

if (md5($password) == $dbpassword) {
    echo "登录成功！";
    $_SESSION['name'] = $user['name'];
    $_SESSION['status'] = $user['status'];
    print_r($_SESSION);
    header("Location:index.php");
    
    echo "此刻的状态".$status[$_SESSION['status']];
}else{
    echo "密码错误";
}
