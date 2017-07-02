<?php
require_once("db.php");
$get = $_GET;
$title = $get['title'];
$content = $get['content'];
$sql = "insert into fuck(title,content)values('{$title}','{$content}')";
$result = $dbh -> exec($sql);

$select = "select id,title,content from fuck";
$result1 = $dbh -> query($select);
$arr = [];
foreach($result1 as $row){
	$arr=$row;
};
echo json_encode($arr);
