<?php
session_start();
$er = $_SESSION["ID"];
$de = $_POST["pi"];
$tr = $_POST["lop"];
$qw = $_POST["re"];
$jhk = $_POST["fla"];
$yt = $er . $tr;
$ey = $tr . $er;
$host = "sqld.duapp.com";
$user = "a1b8ac14cfe5464cae9876cee0d01ff4";
$password = "3a4fc2bb0dfb46bab31f721ef8748c60";
$port = "4050";
$database = "QUwcfWAWcAgyxlPUFUln";
$conn = mysqli_connect($host, $user, $password, $database, $port);
if (!$conn) {
	echo "wrong";
} else {
	$cv = "SELECT Img FROM F1 WHERE ID='" . $er . "'";
	$ww = mysqli_query($conn, $cv);
	if ($ww) {
		$xz = mysqli_affected_rows($conn);
		if ($xz < 0) {
			echo "fail";
		}
		if ($xz > 0) {
			$mm = mysqli_fetch_array($ww, MYSQLI_NUM);
			$sw = "INSERT INTO " . $yt . " (doc,office,who,picture,chat_date) VALUES ('" . $jhk . "','" . $de . "','" . $er . "','" . $mm[0] . "','" . $qw . "')";
			$bn = mysqli_query($conn, $sw);
			if ($bn) {
				$sw1 = "INSERT INTO " . $ey . " (doc,office,who,picture,chat_date) VALUES ('" . $jhk . "','" . $de . "','" . $er . "','" . $mm[0] . "','" . $qw . "')";
				$bc = mysqli_query($conn, $sw1);
				if ($bc) {
					echo "success";
				} else {
					echo "fail2";
				}
			} else {
				echo "fail1";
			}
		}
	} else {
		echo "fail";
	}
}
?>