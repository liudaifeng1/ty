<?php
session_start();
$jishu=-1;
$dc=$_SESSION["ID"];
$bj=$_POST["bj"];
$vi=$_POST["vi"];
$host = "sqld.duapp.com";
$user = "a1b8ac14cfe5464cae9876cee0d01ff4";
$password = "3a4fc2bb0dfb46bab31f721ef8748c60";
$port = "4050";
$database = "QUwcfWAWcAgyxlPUFUln";
$conn = mysqli_connect($host, $user, $password, $database, $port);
if (!$conn) {
	echo "wrong";
}
else{
	$ymp="SELECT * FROM ".$dc.$vi;
	$jun=mysqli_query($conn, $ymp);
	if($jun){
		$ed=mysqli_affected_rows($conn);
		if($ed>0){
			if($ed>$bj){
				$aq2 = array();
			$aq3 = array();
			$aq4 = array();
			$aq5 = array();
			$aq6=array();
			$result = array();
			for($rpi=$ed-($ed-$bj);$rpi<$ed;$rpi++){
				$jishu++;
				$fro=mysqli_data_seek($jun, $rpi);
			$der=mysqli_fetch_row($jun);
			$aq2[$jishu]=$der[1];
			$aq3[$jishu]=$der[2];
			$aq4[$jishu]=$der[3];
			$aq5[$jishu]=$der[4];
			$aq6[$jishu]=$der[5];
			}
			for ($iy = 0; $iy < count($aq2); $iy++) {
				$eri = array("contents", "who", "picture", "chat_date","photo");
				$df = array();
				array_push($df, $aq2[$iy], $aq3[$iy], $aq4[$iy], $aq5[$iy],$aq6[$iy]);
				$combine = array_combine($eri, $df);
				$result[$iy] = $combine;
			}
			$yu = json_encode($result);
			echo $yu;
			}
			else{
				echo "no";
			}
		}
	}
}
?>