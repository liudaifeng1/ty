<?php
//ME数据表是登录用户目前所拥有的全部好友的信息表，有六个字段，第一为ID号，第二为头像，第三为座右铭，第四为姓名，第五为性别，第六为地址
session_start();
$p1=$_POST["ak1"];
$p2=$_POST["ak3"];
$p3=$_POST["ak4"];
$p4=$_POST["ak5"];
$p5=$_POST["ak6"];
$p6=$_POST["ak7"];
$p7=$_SESSION["ID"];
$host="sqld.duapp.com";
$user="a1b8ac14cfe5464cae9876cee0d01ff4";
$password="3a4fc2bb0dfb46bab31f721ef8748c60";
$port="4050";
$database="QUwcfWAWcAgyxlPUFUln";
$conn=mysqli_connect($host, $user, $password, $database, $port);
if(!$conn){
echo "wrong";
}
else{
	$hh="INSERT INTO ME (ID,Img,Signature,Name,Sex,Address,Belong) VALUES ('".$p1."','".$p2."','".$p3."','".$p4."','".$p5."','".$p6."','".$p7."')";
	$qq=mysqli_query($conn, $hh);
	if($qq){
		$hb="SELECT * FROM F1 WHERE ID='".$p7."'";
		$vx=mysqli_query($conn, $hb);
		if($hb){
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
				$ep8=$p1;
				$ep7=array();
				$result=array();
			for($i=0;$i<$vvv1;$i++){
				$we=mysqli_fetch_array($vx, MYSQLI_NUM);
				$ep1[$i]=$we[0];
				$ep7[$i]=$we[6];
				$ep3[$i]=$we[2];
				$ep4[$i]=$we[3];
				$ep5[$i]=$we[4];
				$ep6[$i]=$we[5];
			}
			for($ew=0;$ew<count($ep1);$ew++){
				$fj="INSERT INTO ME (ID,Img,Signature,Name,Sex,Address,Belong) VALUES ('".$ep1[$ew]."','".$ep3[$ew]."','".$ep4[$ew]."','".$ep5[$ew]."','".$ep6[$ew]."','".$ep7[$ew]."','".$ep8."')";
				$yo=mysqli_query($conn, $fj);
				if($yo){
					echo "success";
				}
				else{
					echo "fail";
				}
			}
		}
		}
		else{
			echo "fail";
		}
	}
	else{
		echo "fail";
	}
}
?>