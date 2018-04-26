<?php
	//存在一个数据表DATA,存储用户表白的数据，有六个字段,第一个为表白时间TIME，第二个为表白内容CONTENT，第三个为表白图片IMG，第四个为
	//表白歌曲MUSIC，第五个为表白视频VIDEO，第六个为表白文件FILE；
$sdf=$_POST["sdf"];
$tyu=$_POST["tyu"];
$tyu=trim($tyu);
$currentTime=$_POST["currentTime"];
$music=$_POST["music"];
$video=$_POST["video"];
$wenjian=$_POST["wenj"];
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
	$insert="INSERT INTO DATA (TIME,CONTENT,IMG,MUSIC,VIDEO,FILE) VALUES ('".$currentTime."','".$tyu."','".$sdf."','".$music."','".$video."','".$wenjian."')";
	$an2=mysqli_query($conn,$insert);
	if($an2){
		echo "success";
	}
	else{
		echo "fail";
	}
}
?>