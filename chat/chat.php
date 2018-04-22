<?php
session_start();
$rt = $_SESSION["ID"];
$qq = $_POST["ht"];
$tt = $rt . $qq;
$host = "sqld.duapp.com";
$user = "a1b8ac14cfe5464cae9876cee0d01ff4";
$password = "3a4fc2bb0dfb46bab31f721ef8748c60";
$port = "4050";
$database = "QUwcfWAWcAgyxlPUFUln";
$conn = mysqli_connect($host, $user, $password, $database, $port);
if (!$conn) {
	echo "wrong";
} else {
	//对聊天记录表进行查询，将查询的聊天记录等数据显示到界面
	$se = "SELECT * FROM " . $tt . " WHERE who='" . $rt . "' OR who='" . $qq . "'";
	$cd = mysqli_query($conn, $se);
	if ($cd) {
		$hy = mysqli_affected_rows($conn);
		if ($hy < 0) {
			echo "fail";
		}
		if ($hy > 0) {
			$aq2 = array();
			$aq3 = array();
			$aq4 = array();
			$aq5 = array();
			$aq6 = array();
			$aq7 = array();
			$aq8 = array();
			$result = array();
			for ($io = 0; $io < $hy; $io++) {
				//$jishu++;
				$ert = mysqli_fetch_array($cd, MYSQLI_NUM);
				$aq2[$io] = $ert[1];
				$aq3[$io] = $ert[2];
				$aq4[$io] = $ert[3];
				$aq5[$io] = $ert[4];
				$aq6[$io] = $ert[5];
				$aq7[$io] = $ert[6];
				$aq8[$io] = $ert[7];
			}
			for ($iy = 0; $iy < count($aq2); $iy++) {
				$eri = array("contents", "who", "picture", "chat_date", "photo", "doc", "office");
				$df = array();
				array_push($df, $aq2[$iy], $aq3[$iy], $aq4[$iy], $aq5[$iy], $aq6[$iy], $aq7[$iy], $aq8[$iy]);
				$combine = array_combine($eri, $df);
				$result[$iy] = $combine;
			}
			$yu = json_encode($result);
			echo $yu;
		}
	}
}
?>