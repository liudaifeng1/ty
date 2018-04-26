<?php
$jishu = -1;
$host = "sqld.duapp.com";
$user = "a1b8ac14cfe5464cae9876cee0d01ff4";
$password = "3a4fc2bb0dfb46bab31f721ef8748c60";
$port = "4050";
$database = "QUwcfWAWcAgyxlPUFUln";
$conn = mysqli_connect($host, $user, $password, $database, $port);
if (!$conn) {
	echo "wrong";
} else {
	$select = "SELECT * FROM DATA";
	$an3 = mysqli_query($conn, $select);
	$pb3 = mysqli_affected_rows($conn);
	if ($pb3 < 0) {
		echo "error";
	}
	if ($pb3 == 0) {
		echo "null";
	}
	if ($pb3 > 0) {
		$ay = array();
		$by = array();
		$cy = array();
		$dy = array();
		$ey = array();
		$fy = array();
		$result = array();
		if($pb3>=20){
			for ($io = $_POST["kt"]; $io < 20 * $_POST["counte"]; $io++) {
			$jishu++;
			$reo = mysqli_data_seek($an3, $io);
			$fk = mysqli_fetch_row($an3);
			$ay[$jishu] = $fk[0];
			$by[$jishu] = $fk[1];
			$cy[$jishu] = $fk[2];
			$dy[$jishu] = $fk[3];
			$ey[$jishu] = $fk[4];
			$fy[$jishu] = $fk[5];
		}
		}
		else{
			for($io=0;$io<$pb3;$io++){
				$jishu++;
			$fk=mysqli_fetch_array($an3, MYSQLI_NUM);
			$ay[$jishu] = $fk[0];
			$by[$jishu] = $fk[1];
			$cy[$jishu] = $fk[2];
			$dy[$jishu] = $fk[3];
			$ey[$jishu] = $fk[4];
			$fy[$jishu] = $fk[5];
			}
		}
		for ($iy = 0; $iy < count($ay); $iy++) {
			$eri = array("time", "content", "img", "music", "video", "fil");
			$df = array();
			array_push($df, $ay[$iy], $by[$iy], $cy[$iy], $dy[$iy], $ey[$iy], $fy[$iy]);
			$combine = array_combine($eri, $df);
			$result[$iy] = $combine;
		}
		$yu = json_encode($result);
		//转换后的格式为"[{},{},{}]"
		echo $yu;
	}
}
?>