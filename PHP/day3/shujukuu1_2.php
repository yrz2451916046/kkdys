<?php
	require_once("shujukuu1_3.php");
	
	$post=$_POST;
	$name=$post['name'];
	$password=$post['password'];
	$password=md5($password);
	$age=$post['age'];
	$sex=$post['sex'];
	$idcard=$post['idcard'];
	$mobil=$post['mobil'];
	
	$insertsql="insert into shujukuu1(
				name,
				password,
				age,
				sex,
				idcard,
				mobil
			)values(
				'{$name}',
				'{$password}',
				'{$age}',
				'{$sex}',
				'{$idcard}',
				'{$mobil}'
			)";
//	echo $insertsql;
	$result = $dbh->exec($insertsql);
	if($result>0){
		print_r($result);
		echo "注册成功";
	}
	
	$sql = 'SELECT * FROM shujukuu1';
		foreach ($dbh->query($sql) as $row) {
	       echo "<pre>";
	       echo "以下用户注册成功！";
	       print_r($row['name']);
	    }