<?php
require_once("db.php");
    // session_start();
    session_unset();
       echo "退出成功！";
	header("Location:login.html");
