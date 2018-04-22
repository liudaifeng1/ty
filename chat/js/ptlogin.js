  window.onload = function() {
	$("img").attr("class", "animate");
}

function kk() {
	var a11 = document.getElementById("accounterr");
	var b11 = document.getElementById("pwdd");
	var reg11 = new RegExp("[\\u4E00-\\u9FFF]+", "g");
	if(a11.value != "" && b11.value != "") {
		if(reg11.test(a11.value)) {
			alert("用户名不能包含文字");
		} else {
			if(reg11.test(b11.value)) {
				alert("密码不能包含文字");
			} else {
				$.ajax({
					type: "post",
					url: "ptlogin.php",
					async: true,
					data: {
						account1: a11.value,
						pwd1: b11.value
					},
					success: function(data1) {
						if(data1 == "wrong") {
							alert("数据库链接错误");
						} else if(data1 == "error1" || data1 == "error2") {
							alert("执行数据库查询时发生错误");
						} else if(data1 == "null") {
							alert("抱歉，你没有权限!");

						} else {
							alert("欢迎" + a11.value + "登陆通讯系统");
							if(typeof(Storage) !== "undefined") {
								sessionStorage.setItem("qiao", "login");
							} else {
								alert("对不起，你的终端不支持web储存，暂时不能登录聊天系统");
							}
							window.location.href = "chat.html"; //登陆成功后系统跳转到的页面
						}
					},
					error: function() {
						alert("服务器连接错误");
					}
				});
			}
		}
	} else {
		alert("用户名或密码不能为空");
	}
}