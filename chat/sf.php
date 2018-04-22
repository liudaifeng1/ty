<?php
session_start();
$rt1=$_SESSION["ID"];
$qq1=$_POST["a"];
$tt=$rt1.$qq1;
$rr=$qq1.$rt1;
$host = "sqld.duapp.com";
$user = "a1b8ac14cfe5464cae9876cee0d01ff4";
$password = "3a4fc2bb0dfb46bab31f721ef8748c60";
$port = "4050";
$database = "QUwcfWAWcAgyxlPUFUln";
$conn = mysqli_connect($host, $user, $password, $database, $port);
if (!$conn) {
	echo "wrong";
} else {
	$select = "SELECT * FROM ".$tt;
	$dr = mysqli_query($conn, $select);
	if ($dr) {
		echo "success";
	} else {
		$sql = "CREATE TABLE ".$tt."  (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
contents VARCHAR(200),
who VARCHAR(50) NOT NULL,
picture LONGTEXT,
chat_date VARCHAR(50),
photo LONGTEXT,
doc VARCHAR(10),
office LONGTEXT
)";//此数据表为聊天记录表，id为编号，contents为聊天记录，who为发送人ID，picture为发送人头像，chat_date为发送时间
$jup=mysqli_query($conn, $sql);
if($jup){
	$sql1 = "CREATE TABLE ".$rr."  (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
contents VARCHAR(200),
who VARCHAR(50) NOT NULL,
picture LONGTEXT,
chat_date VARCHAR(50),
photo LONGTEXT,
doc VARCHAR(10),
office LONGTEXT
)";
$az=mysqli_query($conn,$sql1);
if($az){
	echo "success";
}
else{
	echo "fail";
}
}
else{
	echo "fail";
}
	}
}
?>