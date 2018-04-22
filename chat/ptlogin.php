<?php
session_start();
$account1 = $_POST["account1"];
$_SESSION["ID"]=$account1;
$pwd1 = $_POST["pwd1"];
$host="sqld.duapp.com";
$user="a1b8ac14cfe5464cae9876cee0d01ff4";
$password="3a4fc2bb0dfb46bab31f721ef8748c60";
$port="4050";
$database="QUwcfWAWcAgyxlPUFUln";
$conn=mysqli_connect($host, $user, $password, $database, $port);
if (!$conn) {
	echo "wrong";
} else {
	$select1 = "SELECT * FROM F1 WHERE ID='" . $account1 . "' AND Password='" . $pwd1 . "'";
	$sew1 = mysqli_query($conn, $select1);
	if (!$sew1) {
		echo "error1";
	} else {
		$vvv1 = mysqli_affected_rows($conn);
		if ($vvv1 < 0) {
			echo "error2";
		}
		if ($vvv1 == 0) {
			echo "null";
		}
		if ($vvv1 > 0) {
			$ep1=array();
				$ep2=array();
				$ep3=array();
				$ep4=array();
				$ep5=array();
				$ep6=array();
				$ep7=array();
				$result=array();
			for($i=0;$i<$vvv1;$i++){
				$we=mysqli_fetch_array($sew1, MYSQLI_NUM);
				$ep1[$i]=$we[0];
				$ep2[$i]=$we[2];
				$ep3[$i]=$we[3];
				$ep4[$i]=$we[4];
				$ep5[$i]=$we[5];
				$ep6[$i]=$we[6];
			}
			for ($iy = 0; $iy < count($ep1); $iy++) {
			$eri = array("ID1", "Img", "Signature", "Name", "Sex","Address");
			$df = array();
			array_push($df, $ep1[$iy], $ep2[$iy], $ep3[$iy], $ep4[$iy], $ep5[$iy], $ep6[$iy]);
			$combine = array_combine($eri, $df);
			$result[$iy] = $combine;
		}
			$yu = json_encode($result);
			echo $yu;
		}
	}
}
?>