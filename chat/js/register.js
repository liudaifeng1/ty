var txq;
$(document).keydown(function(event) {
	if(event.keyCode == '13') {
		zc();
	}
})

function changing() {
	document.getElementById('checkpic').src = "ZC.php?" + Math.random();
}

function focusa() {
	var dr = document.getElementById("zc");
	dr.disabled = false;
}

function zc1() {
	var pc=get1();
	var hi = 0;
	var code = document.getElementById("code").value;
	var bb = document.getElementsByClassName("input");
	var r1 = document.getElementById("w1");
	var r2 = document.getElementById("w2");
	var r3 = document.getElementById("w3");
	var r4 = document.getElementById("w4");
	var r5 = document.getElementById("w5");
	var r6 = document.getElementById("w6");
	var r7 = document.getElementById("w7");
	var r8 = document.getElementById("w8");
	var r9 = document.getElementById("w9");
	for(var i = 0; i < bb.length; i++) {
		if(bb[i].value.replace(/\s/g, "") == "") {
			hi++;
			switch(i) {
				case 0:
					alert("用户名不能为空");
					r1.innerHTML = "&nbsp;&nbsp;用户名不能为空";
					break;
				case 1:
					alert("密码不能为空");
					r2.innerHTML = "&nbsp;&nbsp;密码不能为空";
					break;
				case 2:
					alert("确认密码不能为空");
					r3.innerHTML = "&nbsp;&nbsp;确认密码不能为空";
					break;
				case 3:
					alert("头像不能为空");
					r4.innerHTML = "&nbsp;&nbsp;头像不能为空";
					break;
				case 4:
					alert("座右铭不能为空");
					r5.innerHTML = "&nbsp;&nbsp;座右铭不能为空";
					break;
				case 5:
					alert("姓名不能为空");
					r6.innerHTML = "&nbsp;&nbsp;姓名不能为空";
					break;
				case 6:
					alert("性别不能为空");
					r7.innerHTML = "&nbsp;&nbsp;性别不能为空";
					break;
				case 7:
					alert("地址不能为空");
					r8.innerHTML = "&nbsp;&nbsp;地址不能为空";
					break;
				case 8:
					alert("验证码不能为空");
					r9.innerHTML = "&nbsp;&nbsp;验证码不能为空";
					break;
			}
		}
		break;
	}
	if(hi == 0) {
		setTimeout(function(){
			$.ajax({
			type: "post",
			url: "zc1.php",
			async: true,
			data: {
				code: code.replace(/\s/g, ""),
				name: document.getElementById("accounter").value.replace(/\s/g, ""),
				pwd: document.getElementById("pwd").value.replace(/\s/g, ""),
				tx: txq,
				zym: document.getElementById("zym").value.replace(/\s/g, ""),
				firstname: document.getElementById("firstname").value.replace(/\s/g, ""),
				sex: document.getElementById("sex").value.replace(/\s/g, ""),
				address: document.getElementById("address").value.replace(/\s/g, "")
			},
			success: function(data) {
				if(data == "success") {
					alert("注册成功");
				}
				if(data == "fail1") {
					alert("注册用户信息失败");
				}
				if(data == "fail2") {
					alert("验证码错误");
				}
			},
			error: function() {
				alert("ajax验证失败");
			}
		});
		},500);
	}
}

var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");

function account() {
	//验证注册名是否合格
	var q1 = document.getElementById("accounter");
	var q2 = document.getElementById("pwd");
	var e2 = document.getElementById("w1");
	var uu = /[0-9]/;
	if(q1.value.replace(/\s/g, "") == "") {
		alert("用户名不能为空");
		e2.innerHTML = "&nbsp;&nbsp;用户名不能为空";
	} else {
		if(reg.test(q1.value.replace(/\s/g, ""))) {
			alert("用户名不能有汉字或数字");
			e2.innerHTML = "&nbsp;&nbsp;用户名不能有汉字或数字";
		} else {
			if(q1.value.length > 20) {
				alert("用户名最多只能输入20个英文字符");
				e2.innerHTML = "&nbsp;&nbsp;用户名最多只能输入20个英文字符";
			} else {
				q1.style.background = "darkseagreen";
				q2.disabled = false;
			}
		}
	}
}

function py() {
	//验证密码是否合格
	var q3 = document.getElementById("pwd");
	var q4 = document.getElementById("pwd1");
	var e1 = document.getElementById("w2");
	if(q3.value.replace(/\s/g, "") == "") {
		alert("密码不允许为空");
		e1.innerHTML = "&nbsp;&nbsp;密码不允许为空";
	} else {
		if(reg.test(q3.value.replace(/\s/g, ""))) {
			alert("密码不能有汉字");
			e1.innerHTML = "&nbsp;&nbsp;密码不能有汉字";
		} else {
			if(q3.value.length > 5 && q3.value.length < 12) {
				q3.style.background = "darkseagreen";
				q4.disabled = false;
			} else {
				alert("密码长度只能在6~11个字符");
				e1.innerHTML = "&nbsp;&nbsp;密码长度只能在6~11个字符";
			}
		}
	}
}

function pp() {
	//验证确认密码是否合格
	var q5 = document.getElementById("pwd1");
	var q6 = document.getElementById("zym");
	var q7 = document.getElementById("pwd");
	var e3 = document.getElementById("w3");
	if(q5.value.replace(/\s/g, "") == "") {
		alert("请再次输入密码");
		e3.innerHTML = "&nbsp;&nbsp;请再次输入密码";
	} else {
		if(q5.value.replace(/\s/g, "") == q7.value.replace(/\s/g, "")) {
			q5.style.background = "darkseagreen";
			q6.disabled = false;
		} else {
			alert("两次输入的密码不一致");
			e3.innerHTML = "&nbsp;&nbsp;两次输入的密码不一致";
		}
	}
}

function tx1() {
	//验证头像是否合格
	var fi = document.getElementById("firstname");
	var akl = document.getElementById("tx");
	var e4 = document.getElementById("w4");
	if(akl.value == "") {
		e4.innerHTML = "&nbsp;&nbsp;请添加头像";
	} else {
		if(!/\.(jpg|jpeg|png|JPG|PNG|gif)$/.test(akl.value)) {
			e4.innerHTML = "只能选择jpg/jpeg/png/gif格式的图片";
		} else {
			akl.style.background = "darkseagreen";
			e4.innerHTML = "";
		}
	}
}

function zym1() {
	//验证座右铭是否合格
	var xf = document.getElementById("firstname");
	var fff = document.getElementById("zym");
	var e5 = document.getElementById("w5");
	if(fff.value == "") {
		e5.innerHTML = "请添加座右铭";
	} else {
		xf.disabled = false;
		e5.innerHTML = "";
	}
}

function firstname1() {
	//验证姓名是否合格
	var cf = document.getElementById("firstname");
	var kf = document.getElementById("sex");
	var e6 = document.getElementById("w6");
	if(cf.value == "") {
		e6.innerHTML = "请输入姓名";
	} else {
		kf.disabled = false;
		e6.innerHTML = "";
	}
}

function sex1() {
	//验证性别是否合格
	var qr = document.getElementById("sex");
	var qy = document.getElementById("address");
	var e7 = document.getElementById("w7");
	if(qr.value == "") {
		e7.innerHTML = "请输入性别";
	} else {
		if(qr.value != "男" && qr.value != "女") {
			e7.innerHTML = "请输入正确的性别";
		}
		if(qr.value == "男" || qr.value == "女") {
			qy.disabled = false;
			e7.innerHTML = "";
		}
	}
}

function address1() {
	//验证地址是否合格
	var ar = document.getElementById("address");
	var hr = document.getElementById("code");
	var e8 = document.getElementById("w8");
	if(ar.value == "") {
		e8.innerHTML = "请输入地址";
	} else {
		hr.disabled = false;
		e8.innerHTML = "";
	}
}

//function email() {
//	//验证邮箱是否合格
//	var q8 = document.getElementById("email");
//	var q9 = document.getElementById("code");
//	var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//	var e4 = document.getElementById("w5");
//	if(q8.value.replace(/\s/g, "") == "") {
//		alert("座右铭不能为空");
//		e4.innerHTML = "&nbsp;&nbsp;座右铭不能为空";
//	} else {
//		if(re.test(q8.value)) {
//			q8.style.background = "darkseagreen";
//			q9.disabled = false;
//		} else {
//			alert("请输入正确的邮箱");
//			e4.innerHTML = "&nbsp;&nbsp;请输入正确的邮箱";
//		}
//	}
//}

function get1() {
	//获取文件  
	var file1 = $("#mys").find("input")[3].files[0];

	//创建读取文件的对象  
	var reader = new FileReader();

	//创建文件读取相关的变量  
	var File1;

	//为文件读取成功设置事件  
	reader.onload = function(e) {
		File1 = e.target.result;
		txq = File1;
	};

	//正式读取文件  
	reader.readAsDataURL(file1);
}