<?php
header("Content-type: text/html; charset=utf-8");
session_start();
$user = "root"; 
$pass = ""; 
$host = 'localhost'; 
$dbname = 'zhuce1'; 
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8');
$dbh = new PDO('mysql:host='.$host.';dbname='.$dbname, $user, $pass,$utf8);
$status = [
        10 => '非常明白',
        20 => '一般明白',
        30 => '明白',
        40 => '懵逼',
        50 => '非常懵逼',
        60 => '跳楼'
    ];