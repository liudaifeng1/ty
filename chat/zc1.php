<?php
session_start();
$code = $_SESSION["verification"];
$code1 = $_POST["code"];
$accou = $_POST["name"];
$pwds = $_POST["pwd"];
$tx = $_POST["tx"];
$zym = $_POST["zym"];
$first = $_POST["firstname"];
$sex = $_POST["sex"];
$address = $_POST["address"];
$code1 = md5($code1);
if ($code == $code1) {
	$host = "sqld.duapp.com";
	$user = "a1b8ac14cfe5464cae9876cee0d01ff4";
	$password = "3a4fc2bb0dfb46bab31f721ef8748c60";
	$port = "4050";
	$database = "QUwcfWAWcAgyxlPUFUln";
	$conn = mysqli_connect($host, $user, $password, $database, $port);
	if (!$conn) {
		echo "wrong";
	} else {
		$insert = "INSERT INTO F1 (ID,Password,Img,Signature,Name,Sex,Address) VALUES ('" . $accou . "','" . $pwds . "','" . $tx . "','" . $zym . "','" . $first . "','" . $sex . "','" . $address . "')";
		$df = mysqli_query($conn, $insert);
		if ($df) {
			echo "success";
		} else {
			echo "fail1";
		}
	}
} else {
	echo "fail2";
}
?>