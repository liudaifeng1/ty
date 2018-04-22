<?php
//F1为系统全部的用户信息表，有七个字段，第一位用户ID，第二为密码，第三为头像，第四为座右铭，第五为姓名，第六为性别，第七为地址
//$jishu=0;
$jk = $_POST["iu"];
$host = "sqld.duapp.com";
$user = "a1b8ac14cfe5464cae9876cee0d01ff4";
$password = "3a4fc2bb0dfb46bab31f721ef8748c60";
$port = "4050";
$database = "QUwcfWAWcAgyxlPUFUln";
$conn = mysqli_connect($host, $user, $password, $database, $port);
if (!$conn) {
	echo "wrong";
} else {
	$fe = "SELECT * FROM F1 WHERE ID='" . $jk . "'";
	$ci = mysqli_query($conn, $fe);
	if ($ci) {
		$xa = mysqli_affected_rows($conn);
		if ($xa < 0) {
			echo "false";
		}
		if ($xa == 0) {
			echo "null";
		}
		if ($xa == 1) {
			$aq1 = array();
			$aq2 = array();
			$aq3 = array();
			$aq4 = array();
			$aq5 = array();
			$aq6 = array();
			$aq7 = array();
			$result = array();
			for ($io = 0; $io < $xa; $io++) {
				//$jishu++;
				$ert = mysqli_fetch_array($ci, MYSQLI_NUM);
				$aq1[$io] = $ert[0];
				$aq2[$io] = $ert[1];
				$aq3[$io] = $ert[2];
				$aq4[$io] = $ert[3];
				$aq5[$io] = $ert[4];
				$aq6[$io] = $ert[5];
				$aq7[$io] = $ert[6];
			}
			for ($iy = 0; $iy < count($aq1); $iy++) {
				$eri = array("ID1", "Pwd", "Img", "Signature", "Name", "Sex", "Addres");
				$df = array();
				array_push($df, $aq1[$iy], $aq2[$iy], $aq3[$iy], $aq4[$iy], $aq5[$iy], $aq6[$iy], $aq7[$iy]);
				$combine = array_combine($eri, $df);
				$result[$iy] = $combine;
			}
			$yu = json_encode($result);
			echo $yu;
		}
	}
}
?>