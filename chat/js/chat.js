var a = document.getElementsByClassName("glyphicon");
var b = document.getElementById("id");
var c = document.getElementById("ik");
var d = document.getElementById("kong");
var quo;
var hhu;
var cg;
var picture;
var fil;

function keyi() {
	if(window.event) // IE
	{
		if(event.keyCode == 13) {
			F1();

		}
	} else if(e.which) // Netscape/Firefox/Opera
	{
		if(e.which == 13) {
			F1();
		}
	}
}

function search() {
	a[1].style.display = "none";
	b.style.display = "";
	c.style.display = "none";
	d.style.display = "none";
	setTimeout(function() {
		b.autofocus = true;
	}, 50);
}

function add() {
	a[0].style.display = "none";
	b.style.display = "none";
	c.style.display = "";
	d.style.display = "none";
	setTimeout(function() {
		c.autofocus = "autofocus";
	}, 50);
}

function lose() {
	a[0].style.display = "";
	a[1].style.display = "";
	b.style.display = "none";
	c.style.display = "none";
	d.style.display = "";
}

function F1() {
	var bu = document.getElementById("id").value;
	if(bu == "") {
		alert("请输入ID");
	} else {
		$.ajax({
			type: "post",
			url: "f1.php",
			async: true,
			data: {
				iu: b.value.replace(/\s/g, "")
			},
			success: function(data) {
				alert(data);
				if(data == "wrong" || data == "false") {
					alert("系统发生错误！");
				} else if(data == "null") {
					alert("没有此用户！");
				} else {
					if(typeof data == "string") {
						console.log(data);
						var ft = data;
						var fhj = JSON.parse(ft);
						for(var i = 0; i < fhj.length; i++) {
							var ej1 = fhj[i].ID1;
							var ej2 = fhj[i].Pwd;
							var ej3 = fhj[i].Img;
							var ej4 = fhj[i].Signature;
							var ej5 = fhj[i].Name;
							var ej6 = fhj[i].Sex;
							var ej7 = fhj[i].Addres;
							$.ajax({
								type: "post",
								url: "ME.php",
								async: true,
								data: {
									ak1: ej1,
									ak2: ej2,
									ak3: ej3,
									ak4: ej4,
									ak5: ej5,
									ak6: ej6,
									ak7: ej7
								},
								success: function(data1) {
									if(data1 == "fail") {
										window.confirm("添加失败！");
									}
									if(data1 == "success") {
										window.confirm("添加成功！");
									}
								},
								error: function() {
									alert("ajax was error");
								}
							});
						}
					}
				}
			},
			error: function() {
				alert("server was error");
			}
		});
	}
}

function encodeTextarea(str) {
	str = str.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
	var str = str.replace(/<br\/>/g, "\r\n");
	return str;
}
window.onload = function() {
	setTimeout(function() {
		$.ajax({
			type: "post",
			url: "bin.php",
			async: true,
			data: {
				flag: 1
			},
			success: function(fb) {
				document.getElementById("bgDiv").style.backgroundImage = "url(" + fb + "_1920x1080.jpg)";
			},
			error: function() {
				document.getElementById("bgDiv").style.backgroundImage = "url(../SW/images/BingWallpaper.jpg)";
			},
			timeout: 5000
		});
	}, 500);

	if(typeof(Storage) !== "undefined") {
		if(sessionStorage.getItem("qiao") != undefined) {
			$.ajax({
				type: "post",
				url: "list.php",
				async: true,
				success: function(data2) {
					if(data2 == "wrong" || data2 == "false") {
						alert("System was wrong");
					} else if(data2 == "null") {
						alert("没有好友,快去添加吧！");
					} else {
						//将好友显示到列表
						console.log(data2);
						quo = JSON.parse(data2);
						var ww = document.getElementsByClassName("zho");
						for(var gy = 0; gy < quo.length; gy++) {
							var f1 = document.createElement("div");
							var a1 = document.createAttribute("class");
							var f2 = document.createElement("img");
							var a2 = document.createAttribute("src");
							var a3 = document.createAttribute("class");
							var f3 = document.createElement("div");
							var a4 = document.createAttribute("class");
							var f4 = document.createElement("p");
							var a5 = document.createAttribute("id");
							var f5 = document.createElement("p");
							var f6 = document.createElement("span");
							var f7 = document.createElement("span");
							a1.value = "act";
							f1.setAttributeNode(a1);
							f1.appendChild(f2);
							a4.value = "kkt";
							f3.setAttributeNode(a4);
							a3.value = "Img";
							a2.value = quo[gy].Img;
							f2.setAttributeNode(a2);
							f2.setAttributeNode(a3);
							a5.value = "sky";
							f4.setAttributeNode(a5);
							f4.innerHTML = quo[gy].Name;
							f6.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + quo[gy].Sex;
							f4.appendChild(f6);
							f7.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + quo[gy].Addres;
							f4.appendChild(f7);
							f3.appendChild(f4);
							f5.innerHTML = quo[gy].Signature;
							f3.appendChild(f5);
							f1.appendChild(f3);
							ww[0].appendChild(f1);
						}

						$(".act").each(function(index1) {
							$(this).mouseover(function() {
								var gu = document.getElementById("ga");
								var e = event || window.event;
								var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
								var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
								var x = e.pageX || e.clientX + scrollX;
								var y = e.pageY || e.clientY + scrollY;
								gu.style.left = x + "px";
								gu.style.top = y + "px";
								gu.style.textAlign = "center";
								gu.innerHTML = quo[index1].ID1;
								gu.style.display = "block";
							});
							$(this).mouseleave(function() {
								var gu = document.getElementById("ga");
								gu.style.display = "none";
							});
							$(this).click(function() {
								document.getElementById("which").innerHTML = "正在与" + quo[index1].ID1 + "会话";
								hhu = quo[index1].ID1;
								$.ajax({
									type: "post",
									url: "sf.php",
									data: {
										a: quo[index1].ID1
									},
									async: true,
									success: function(data3) {
										if(data3 == "success") {
											$.ajax({
												type: "post",
												url: "chat.php",
												async: true,
												data: {
													ht: hhu
												},
												success: function(data4) {
													var fb = document.getElementsByClassName("huihua");
													fb[0].innerHTML = "";
													var yy = JSON.parse(data4);
													for(var cl = 0; cl < yy.length; cl++) {
														if(yy[cl].contents != null) {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("div");
															var ru = document.createAttribute("class");
															ru.value = "qvs";
															fr.setAttributeNode(ru);
															fr.innerHTML = yy[cl].contents;
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);
														}

														if(yy[cl].photo != null) {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("img");
															var ru = document.createAttribute("class");
															ru.value = "qvs";
															fr.setAttributeNode(ru);
															fr.src = yy[cl].photo;
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);
														}
														if(yy[cl].doc == "doc"||yy[cl].doc=="docx") {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("div");
															var nb = document.createElement("img");
															var ku = document.createElement("span");
															ku.innerHTML = "&nbsp;&nbsp;Word文档";
															nb.src = "img/word.jpg";
															var mm = document.createAttribute("class");
															mm.value = "ml";
															nb.setAttributeNode(mm);
															fr.appendChild(nb);
															fr.appendChild(ku);
															var ru = document.createAttribute("class");
															ru.value = "qv";
															fr.setAttributeNode(ru);
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);

														}
														if(yy[cl].doc == "pptx"||yy[cl].doc=="ppt") {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("div");
															var nb = document.createElement("img");
															var ku = document.createElement("span");
															ku.innerHTML = "&nbsp;&nbsp;PPT演示文稿";
															nb.src = "img/timg.jpg";
															var mm = document.createAttribute("class");
															mm.value = "ml";
															nb.setAttributeNode(mm);
															fr.appendChild(nb);
															fr.appendChild(ku);
															var ru = document.createAttribute("class");
															ru.value = "qv";
															fr.setAttributeNode(ru);
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);
														}
														if(yy[cl].doc == "xlsx"||yy[cl].doc=="xls") {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("div");
															var nb = document.createElement("img");
															var ku = document.createElement("span");
															ku.innerHTML = "&nbsp;&nbsp;EXCEL表格";
															nb.src = "img/3.jpg";
															var mm = document.createAttribute("class");
															mm.value = "ml";
															nb.setAttributeNode(mm);
															fr.appendChild(nb);
															fr.appendChild(ku);
															var ru = document.createAttribute("class");
															ru.value = "qv";
															fr.setAttributeNode(ru);
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);
														}
														if(yy[cl].doc == "pdf") {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("div");
															var nb = document.createElement("img");
															var ku = document.createElement("span");
															ku.innerHTML = "&nbsp;&nbsp;PDF文件";
															nb.src = "img/pdf.jpg";
															var mm = document.createAttribute("class");
															mm.value = "ml";
															nb.setAttributeNode(mm);
															fr.appendChild(nb);
															fr.appendChild(ku);
															var ru = document.createAttribute("class");
															ru.value = "qv";
															fr.setAttributeNode(ru);
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);
														}
														if(yy[cl].doc == "txt") {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("div");
															var nb = document.createElement("img");
															var ku = document.createElement("span");
															ku.innerHTML = "&nbsp;&nbsp;TXT文件";
															nb.src = "img/j.jpg";
															var mm = document.createAttribute("class");
															mm.value = "ml";
															nb.setAttributeNode(mm);
															fr.appendChild(nb);
															fr.appendChild(ku);
															var ru = document.createAttribute("class");
															ru.value = "qv";
															fr.setAttributeNode(ru);
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);
														}
														if(yy[cl].doc == "rar") {
															var p1 = document.createElement("div");
															var k1 = document.createAttribute("class");
															k1.value = "en";
															p1.setAttributeNode(k1);
															var o1 = document.createElement("div");
															var bg = document.createAttribute("class");
															bg.value = "kk";
															o1.setAttributeNode(bg);
															var fr = document.createElement("div");
															var nb = document.createElement("img");
															var ku = document.createElement("span");
															ku.innerHTML = "&nbsp;&nbsp;zip文件";
															nb.src = "img/zip.jpg";
															var mm = document.createAttribute("class");
															mm.value = "ml";
															nb.setAttributeNode(mm);
															fr.appendChild(nb);
															fr.appendChild(ku);
															var ru = document.createAttribute("class");
															ru.value = "qv";
															fr.setAttributeNode(ru);
															p1.appendChild(fr);
															var p2 = document.createElement("p");
															p2.innerHTML = yy[cl].who;
															o1.appendChild(p2);
															p1.appendChild(o1);
															var p3 = document.createElement("img");
															var k2 = document.createAttribute("src");
															var k3 = document.createAttribute("class");
															k3.value = "nn";
															k2.value = yy[cl].picture;
															p3.setAttributeNode(k3);
															p3.setAttributeNode(k2);
															o1.appendChild(p3);
															p1.appendChild(o1);
															fb[0].appendChild(p1);
														}

													}
													$(".en img").each(function(indep) {
														$(this).click(function() {
															$(".log").css("display", "inline-block");
															$(".log").attr("autofocus", "autofocus");
															$(".lol").attr("src", $(this).attr("src"));
														});
													});
													$(".en").each(function(ind) {
														$(this).click(function() {
															if(yy[ind].office != null) {
																if(yy[ind].doc == "doc") {
																	var io = "off.doc";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "js") {
																	var io = "off.js";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "css") {
																	var io = "off.css";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "rtf") {
																	var io = "off.rtf";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "dll") {
																	var io = "off.dll";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "pdf") {
																	var io = "off.pdf";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		download(yy[ind].office, io);
																	}
																}
																if(yy[ind].doc == "docx") {
																	var io = "off.docx";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "xlsx") {
																	var io = "off.xlsx";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "pptx") {
																	var io = "off.pptx";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "ppt") {
																	var io = "off.ppt";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		window.open(yy[ind].office);
																	}
																}
																if(yy[ind].doc == "txt") {
																	var io = "off.txt";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		download(yy[ind].office, io);
																	}
																}
																if(yy[ind].doc == "rar") {
																	var io = "off.rar";
																	var kio = window.confirm("点击确定下载");
																	if(kio) {
																		download(yy[ind].office, io);
																	}
																}
																//window.open(yy[ind].office);
																//																window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
																//																window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
															}
															//															window.location.href="http://ow365.cn/?i=15031&furl="+yy[ind].office;
															//                                                          window.location.href="http://api.idocv.com/view/url?url="+yy[ind].office;
														});
													});
												},
												error: function() {
													alert("服务器连接失败");
												}
											});
										} else {
											alert("数据表创建失败，会话无法进行");
											document.getElementById("which").innerHTML = "会话连接中断";
										}
									},
									error: function() {
										alert("服务器失败，会话无法进行");
										document.getElementById("which").innerHTML = "会话连接中断";
									}
								});

							})
						})
					}
				},
				error: function() {
					window.confirm("server not found");
				}
			});

		} else {
			window.location.href = "ptlogin.html";
		}
	}
}

function chat() {
	$(".act").each(function() {

	})
}

function Send() {
	var yi = document.getElementById("cont").value;
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	if(time.getHours() < 10) {
		hours = "0" + time.getHours();
	}
	if(time.getMinutes() < 10) {
		minutes = "0" + time.getMinutes();
	}
	if(time.getSeconds() < 10) {
		seconds = "0" + time.getSeconds();
	}
	var currentTime = time.getFullYear() + "年" + time.getMonth() + 1 + "月" + time.getDate() + "日" + "" + hours + ":" + minutes + ":" + seconds;
	if(yi == "") {
		window.confirm("请输入聊天内容！");
	} else {
		$.ajax({
			type: "post",
			url: "insert.php",
			async: true,
			data: {
				liaotian: yi,
				other: hhu,
				curtime: currentTime
			},
			success: function(data5) {
				if(data5 == "success") {
					//将聊天记录表的数据显示到页面
					$.ajax({
						type: "post",
						url: "chat.php",
						async: true,
						data: {
							ht: hhu
						},
						success: function(data6) {
							var fb = document.getElementsByClassName("huihua");
							fb[0].innerHTML = "";
							var yy = JSON.parse(data6);
							for(var cl = 0; cl < yy.length; cl++) {
								if(yy[cl].contents != null) {
									var p1 = document.createElement("div");
									var k1 = document.createAttribute("class");
									k1.value = "en";
									p1.setAttributeNode(k1);
									var o1 = document.createElement("div");
									var bg = document.createAttribute("class");
									bg.value = "kk";
									o1.setAttributeNode(bg);
									var fr = document.createElement("div");
									var ru = document.createAttribute("class");
									ru.value = "qvs";
									fr.setAttributeNode(ru);
									fr.innerHTML = yy[cl].contents;
									p1.appendChild(fr);
									var p2 = document.createElement("p");
									p2.innerHTML = yy[cl].who;
									o1.appendChild(p2);
									p1.appendChild(o1);
									var p3 = document.createElement("img");
									var k2 = document.createAttribute("src");
									var k3 = document.createAttribute("class");
									k3.value = "nn";
									k2.value = yy[cl].picture;
									p3.setAttributeNode(k3);
									p3.setAttributeNode(k2);
									o1.appendChild(p3);
									p1.appendChild(o1);
									fb[0].appendChild(p1);
								}
								if(yy[cl].photo != null) {
									var p1 = document.createElement("div");
									var k1 = document.createAttribute("class");
									k1.value = "en";
									p1.setAttributeNode(k1);
									var o1 = document.createElement("div");
									var bg = document.createAttribute("class");
									bg.value = "kk";
									o1.setAttributeNode(bg);
									var fr = document.createElement("img");
									var ru = document.createAttribute("class");
									ru.value = "qvs";
									fr.setAttributeNode(ru);
									fr.src = yy[cl].photo;
									p1.appendChild(fr);
									var p2 = document.createElement("p");
									p2.innerHTML = yy[cl].who;
									o1.appendChild(p2);
									p1.appendChild(o1);
									var p3 = document.createElement("img");
									var k2 = document.createAttribute("src");
									var k3 = document.createAttribute("class");
									k3.value = "nn";
									k2.value = yy[cl].picture;
									p3.setAttributeNode(k3);
									p3.setAttributeNode(k2);
									o1.appendChild(p3);
									p1.appendChild(o1);
									fb[0].appendChild(p1);
								}
								if(yy[cl].doc == "A") {
									var p1 = document.createElement("div");
									var k1 = document.createAttribute("class");
									k1.value = "en";
									p1.setAttributeNode(k1);
									var o1 = document.createElement("div");
									var bg = document.createAttribute("class");
									bg.value = "kk";
									o1.setAttributeNode(bg);
									var fr = document.createElement("div");
									var nb = document.createElement("img");
									var ku = document.createElement("span");
									ku.innerHTML = "&nbsp;&nbsp;Word文档";
									nb.src = "img/word.jpg";
									var mm = document.createAttribute("class");
									mm.value = "ml";
									nb.setAttributeNode(mm);
									fr.appendChild(nb);
									fr.appendChild(ku);
									var ru = document.createAttribute("class");
									ru.value = "qv";
									fr.setAttributeNode(ru);
									p1.appendChild(fr);
									var p2 = document.createElement("p");
									p2.innerHTML = yy[cl].who;
									o1.appendChild(p2);
									p1.appendChild(o1);
									var p3 = document.createElement("img");
									var k2 = document.createAttribute("src");
									var k3 = document.createAttribute("class");
									k3.value = "nn";
									k2.value = yy[cl].picture;
									p3.setAttributeNode(k3);
									p3.setAttributeNode(k2);
									o1.appendChild(p3);
									p1.appendChild(o1);
									fb[0].appendChild(p1);

								}
								if(yy[cl].doc == "B") {
									var p1 = document.createElement("div");
									var k1 = document.createAttribute("class");
									k1.value = "en";
									p1.setAttributeNode(k1);
									var o1 = document.createElement("div");
									var bg = document.createAttribute("class");
									bg.value = "kk";
									o1.setAttributeNode(bg);
									var fr = document.createElement("div");
									var nb = document.createElement("img");
									var ku = document.createElement("span");
									ku.innerHTML = "&nbsp;&nbsp;PPT演示文稿";
									nb.src = "img/timg.jpg";
									var mm = document.createAttribute("class");
									mm.value = "ml";
									nb.setAttributeNode(mm);
									fr.appendChild(nb);
									fr.appendChild(ku);
									var ru = document.createAttribute("class");
									ru.value = "qv";
									fr.setAttributeNode(ru);
									p1.appendChild(fr);
									var p2 = document.createElement("p");
									p2.innerHTML = yy[cl].who;
									o1.appendChild(p2);
									p1.appendChild(o1);
									var p3 = document.createElement("img");
									var k2 = document.createAttribute("src");
									var k3 = document.createAttribute("class");
									k3.value = "nn";
									k2.value = yy[cl].picture;
									p3.setAttributeNode(k3);
									p3.setAttributeNode(k2);
									o1.appendChild(p3);
									p1.appendChild(o1);
									fb[0].appendChild(p1);
								}
								if(yy[cl].doc == "C") {
									var p1 = document.createElement("div");
									var k1 = document.createAttribute("class");
									k1.value = "en";
									p1.setAttributeNode(k1);
									var o1 = document.createElement("div");
									var bg = document.createAttribute("class");
									bg.value = "kk";
									o1.setAttributeNode(bg);
									var fr = document.createElement("div");
									var nb = document.createElement("img");
									var ku = document.createElement("span");
									ku.innerHTML = "&nbsp;&nbsp;EXCEL表格";
									nb.src = "img/3.jpg";
									var mm = document.createAttribute("class");
									mm.value = "ml";
									nb.setAttributeNode(mm);
									fr.appendChild(nb);
									fr.appendChild(ku);
									var ru = document.createAttribute("class");
									ru.value = "qv";
									fr.setAttributeNode(ru);
									p1.appendChild(fr);
									var p2 = document.createElement("p");
									p2.innerHTML = yy[cl].who;
									o1.appendChild(p2);
									p1.appendChild(o1);
									var p3 = document.createElement("img");
									var k2 = document.createAttribute("src");
									var k3 = document.createAttribute("class");
									k3.value = "nn";
									k2.value = yy[cl].picture;
									p3.setAttributeNode(k3);
									p3.setAttributeNode(k2);
									o1.appendChild(p3);
									p1.appendChild(o1);
									fb[0].appendChild(p1);
								}
							}
							$(".en img").each(function(indep) {
								$(this).click(function() {
									$(".log").css("display", "inline-block");
									$(".log").attr("autofocus", "autofocus");
									$(".lol").attr("src", $(this).attr("src"));
								});
							});
							$(".en").each(function(ind) {
								$(this).click(function() {
									if(yy[ind].office != null) {
										window.open(yy[ind].office);
									}
									//															window.location.href="http://ow365.cn/?i=15031&furl="+yy[ind].office;
									//                                                          window.location.href="http://api.idocv.com/view/url?url="+yy[ind].office;
								});
							});
						}
					});
				} else if(data5 == "fail") {
					window.confirm("获取头像失败导致信息发送不了！");
				} else {
					window.confirm("信息插入失败");
				}
			},
			error: function() {
				alert("ajax was error");
			}
		});
	}
}

function Load() {
	var pb = document.getElementsByClassName("huihua");
	var yp = document.getElementsByClassName("en");
	$.ajax({
		type: "post",
		url: "bijiao.php",
		async: true,
		data: {
			bj: yp.length,
			vi: hhu
		},
		success: function(data8) {
			if(data8 != "no") {
				var fb = document.getElementsByClassName("huihua");
				var yy = JSON.parse(data8);
				for(var cl = 0; cl < yy.length; cl++) {
					if(yy[cl].contents != null) {
						var p1 = document.createElement("div");
						var k1 = document.createAttribute("class");
						k1.value = "en";
						p1.setAttributeNode(k1);
						var o1 = document.createElement("div");
						var bg = document.createAttribute("class");
						bg.value = "kk";
						o1.setAttributeNode(bg);
						var fr = document.createElement("div");
						var ru = document.createAttribute("class");
						ru.value = "qvs";
						fr.setAttributeNode(ru);
						fr.innerHTML = yy[cl].contents;
						p1.appendChild(fr);
						var p2 = document.createElement("p");
						p2.innerHTML = yy[cl].who;
						o1.appendChild(p2);
						p1.appendChild(o1);
						var p3 = document.createElement("img");
						var k2 = document.createAttribute("src");
						var k3 = document.createAttribute("class");
						k3.value = "nn";
						k2.value = yy[cl].picture;
						p3.setAttributeNode(k3);
						p3.setAttributeNode(k2);
						o1.appendChild(p3);
						p1.appendChild(o1);
						fb[0].appendChild(p1);
					}
					if(yy[cl].photo != null) {
						var p1 = document.createElement("div");
						var k1 = document.createAttribute("class");
						k1.value = "en";
						p1.setAttributeNode(k1);
						var o1 = document.createElement("div");
						var bg = document.createAttribute("class");
						bg.value = "kk";
						o1.setAttributeNode(bg);
						var fr = document.createElement("img");
						var ru = document.createAttribute("class");
						ru.value = "qvs";
						fr.setAttributeNode(ru);
						fr.src = yy[cl].photo;
						p1.appendChild(fr);
						var p2 = document.createElement("p");
						p2.innerHTML = yy[cl].who;
						o1.appendChild(p2);
						p1.appendChild(o1);
						var p3 = document.createElement("img");
						var k2 = document.createAttribute("src");
						var k3 = document.createAttribute("class");
						k3.value = "nn";
						k2.value = yy[cl].picture;
						p3.setAttributeNode(k3);
						p3.setAttributeNode(k2);
						o1.appendChild(p3);
						p1.appendChild(o1);
						fb[0].appendChild(p1);
					}
					if(yy[cl].doc == "A") {
						var p1 = document.createElement("div");
						var k1 = document.createAttribute("class");
						k1.value = "en";
						p1.setAttributeNode(k1);
						var o1 = document.createElement("div");
						var bg = document.createAttribute("class");
						bg.value = "kk";
						o1.setAttributeNode(bg);
						var fr = document.createElement("div");
						var nb = document.createElement("img");
						var ku = document.createElement("span");
						ku.innerHTML = "&nbsp;&nbsp;Word文档";
						nb.src = "img/word.jpg";
						var mm = document.createAttribute("class");
						mm.value = "ml";
						nb.setAttributeNode(mm);
						fr.appendChild(nb);
						fr.appendChild(ku);
						var ru = document.createAttribute("class");
						ru.value = "qv";
						fr.setAttributeNode(ru);
						p1.appendChild(fr);
						var p2 = document.createElement("p");
						p2.innerHTML = yy[cl].who;
						o1.appendChild(p2);
						p1.appendChild(o1);
						var p3 = document.createElement("img");
						var k2 = document.createAttribute("src");
						var k3 = document.createAttribute("class");
						k3.value = "nn";
						k2.value = yy[cl].picture;
						p3.setAttributeNode(k3);
						p3.setAttributeNode(k2);
						o1.appendChild(p3);
						p1.appendChild(o1);
						fb[0].appendChild(p1);

					}
					if(yy[cl].doc == "B") {
						var p1 = document.createElement("div");
						var k1 = document.createAttribute("class");
						k1.value = "en";
						p1.setAttributeNode(k1);
						var o1 = document.createElement("div");
						var bg = document.createAttribute("class");
						bg.value = "kk";
						o1.setAttributeNode(bg);
						var fr = document.createElement("div");
						var nb = document.createElement("img");
						var ku = document.createElement("span");
						ku.innerHTML = "&nbsp;&nbsp;PPT演示文稿";
						nb.src = "img/timg.jpg";
						var mm = document.createAttribute("class");
						mm.value = "ml";
						nb.setAttributeNode(mm);
						fr.appendChild(nb);
						fr.appendChild(ku);
						var ru = document.createAttribute("class");
						ru.value = "qv";
						fr.setAttributeNode(ru);
						p1.appendChild(fr);
						var p2 = document.createElement("p");
						p2.innerHTML = yy[cl].who;
						o1.appendChild(p2);
						p1.appendChild(o1);
						var p3 = document.createElement("img");
						var k2 = document.createAttribute("src");
						var k3 = document.createAttribute("class");
						k3.value = "nn";
						k2.value = yy[cl].picture;
						p3.setAttributeNode(k3);
						p3.setAttributeNode(k2);
						o1.appendChild(p3);
						p1.appendChild(o1);
						fb[0].appendChild(p1);
					}
					if(yy[cl].doc == "C") {
						var p1 = document.createElement("div");
						var k1 = document.createAttribute("class");
						k1.value = "en";
						p1.setAttributeNode(k1);
						var o1 = document.createElement("div");
						var bg = document.createAttribute("class");
						bg.value = "kk";
						o1.setAttributeNode(bg);
						var fr = document.createElement("div");
						var nb = document.createElement("img");
						var ku = document.createElement("span");
						ku.innerHTML = "&nbsp;&nbsp;EXCEL表格";
						nb.src = "img/3.jpg";
						var mm = document.createAttribute("class");
						mm.value = "ml";
						nb.setAttributeNode(mm);
						fr.appendChild(nb);
						fr.appendChild(ku);
						var ru = document.createAttribute("class");
						ru.value = "qv";
						fr.setAttributeNode(ru);
						p1.appendChild(fr);
						var p2 = document.createElement("p");
						p2.innerHTML = yy[cl].who;
						o1.appendChild(p2);
						p1.appendChild(o1);
						var p3 = document.createElement("img");
						var k2 = document.createAttribute("src");
						var k3 = document.createAttribute("class");
						k3.value = "nn";
						k2.value = yy[cl].picture;
						p3.setAttributeNode(k3);
						p3.setAttributeNode(k2);
						o1.appendChild(p3);
						p1.appendChild(o1);
						fb[0].appendChild(p1);
					}
				}
				$(".en img").each(function(indep) {
					$(this).click(function() {
						$(".log").css("display", "inline-block");
						$(".log").attr("autofocus", "autofocus");
						$(".lol").attr("src", $(this).attr("src"));
					});
				});
				$(".en").each(function(ind) {
					$(this).click(function() {
						if(yy[ind].office != null) {
							window.open(yy[ind].office);
						}
						//															window.location.href="http://ow365.cn/?i=15031&furl="+yy[ind].office;
						//                                                          window.location.href="http://api.idocv.com/view/url?url="+yy[ind].office;
					});
				});
			} else {

			}
			pb[0].scrollTop = pb[0].scrollHeight;
		},
		error: function() {}
	});
}

//window.onload=function(){
//}

function ch() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	if(time.getHours() < 10) {
		hours = "0" + time.getHours();
	}
	if(time.getMinutes() < 10) {
		minutes = "0" + time.getMinutes();
	}
	if(time.getSeconds() < 10) {
		seconds = "0" + time.getSeconds();
	}
	var currentTime1 = time.getFullYear() + "年" + time.getMonth() + 1 + "月" + time.getDate() + "日" + "" + hours + ":" + minutes + ":" + seconds;
	getpicture();
	setTimeout(function() {
		$.ajax({
			type: "post",
			url: "xb.php",
			async: true,
			data: {
				pi: picture,
				re: currentTime1,
				lop: hhu
			},
			success: function(pi) {

			}
		});
	}, 500);
}

function getpicture() {
	//获取文件  
	var file1 = $("#imgForm3").find("input")[0].files[0];

	//创建读取文件的对象  
	var reader = new FileReader();

	//创建文件读取相关的变量  
	var File;

	//为文件读取成功设置事件  
	reader.onload = function(e) {
		File = e.target.result;
		picture = File;
	};

	//正式读取文件  
	reader.readAsDataURL(file1);
}

function mkp() {
	$(".log").css("display", "none");
}

function cll() {
	var hao;
	var kuo = document.getElementById("d").value.toLowerCase().split('.').splice(-1);
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	if(kuo == "doc") {
		hao = "doc";
	}
	if(kuo == "docx") {
		hao = "docx";
	}
	if(kuo == "pdf") {
		hao = "pdf";
	}

	if(kuo == "pptx") {
		hao = "pptx";
	}
	if(kuo == "xlsx") {
		hao = "xlsx";
	}
	if(kuo == "xls") {
		hao = "xls";
	}
	if(kuo == "txt") {
		hao = "txt";
	}
	if(kuo == "rar") {
		hao = "rar";
	}
	if(kuo == "css") {
		hao = "css";
	}
	if(kuo == "dll") {
		hao = "dll";
	}
	if(kuo == "rtf") {
		hao = "rtf";
	}
	if(kuo == "html") {
		hao = "html";
	}
	if(kuo == "htm") {
		hao = "htm";
	}
	if(time.getHours() < 10) {
		hours = "0" + time.getHours();
	}
	if(time.getMinutes() < 10) {
		minutes = "0" + time.getMinutes();
	}
	if(time.getSeconds() < 10) {
		seconds = "0" + time.getSeconds();
	}
	var currentTime1 = time.getFullYear() + "年" + time.getMonth() + 1 + "月" + time.getDate() + "日" + "" + hours + ":" + minutes + ":" + seconds;
	getfile(document.getElementById("d"));
	setTimeout(function() {
		$.ajax({
			type: "post",
			url: "xb1.php",
			async: true,
			data: {
				pi: fil,
				fla: hao,
				re: currentTime1,
				lop: hhu
			},
			success: function(pl) {

			},
			error: function() {
				alert("error");
			}
		});
	}, 1000);
}

function getfile(ki){
	fil=ki.files[0];
}

//function getfile() {
//	//获取文件  
//	var file1 = $("#imgForm3").find("input")[3].files[0];
//
//	//创建读取文件的对象  
//	var reader = new FileReader();
//
//	//创建文件读取相关的变量  
//	var File;
//
//	//为文件读取成功设置事件  
//	reader.onload = function(e) {
//		File = e.target.result;
//		fil = File;
//	};
//
//	//正式读取文件  
//	reader.readAsDataURL(file1);
//}

(function(root, factory) {
	if(typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if(typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.download = factory();
	}
}(this, function() {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a) {
				return String(a);
			},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
		myBlob = myBlob.call ? myBlob.bind(self) : Blob;

		if(String(this) === "true") { //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload = [payload, mimeType];
			mimeType = payload[0];
			payload = payload[1];
		}

		if(url && url.length < 2048) { // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
			if(anchor.href.indexOf(url) !== -1) { // if the browser determines that it's a potentially valid url path:
				var ajax = new XMLHttpRequest();
				ajax.open("GET", url, true);
				ajax.responseType = 'blob';
				ajax.onload = function(e) {
					download(e.target.response, fileName, defaultMime);
				};
				setTimeout(function() {
					ajax.send();
				}, 0); // allows setting custom ajax headers using the return:
				return ajax;
			} // end if valid url?
		} // end if url?

		//go ahead and download dataURLs right away
		if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)) {

			if(payload.length > (1024 * 1024 * 1.999) && myBlob !== toString) {
				payload = dataUrlToBlob(payload);
				mimeType = payload.type || defaultMime;
			} else {
				return navigator.msSaveBlob ? // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload); // everyone else can save dataURLs un-processed
			}

		} //end if dataURL passed?

		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {
				type: mimeType
			});

		function dataUrlToBlob(strUrl) {
			var parts = strUrl.split(/[:;,]/),
				type = parts[1],
				decoder = parts[2] == "base64" ? atob : decodeURIComponent,
				binData = decoder(parts.pop()),
				mx = binData.length,
				i = 0,
				uiArr = new Uint8Array(mx);

			for(i; i < mx; ++i) uiArr[i] = binData.charCodeAt(i);

			return new myBlob([uiArr], {
				type: type
			});
		}

		function saver(url, winMode) {

			if('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode === true) {
						setTimeout(function() {
							self.URL.revokeObjectURL(anchor.href);
						}, 250);
					}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				url = url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)) { // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
						location.href = url;
					}
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode) { // force a mime that will download:
				url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src = url;
			setTimeout(function() {
				document.body.removeChild(f);
			}, 333);

		} //end saver

		if(navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL) { // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		} else {
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor === toString) {
				try {
					return saver("data:" + mimeType + ";base64," + self.btoa(blob));
				} catch(y) {
					return saver("data:" + mimeType + "," + encodeURIComponent(blob));
				}
			}

			// Blob but not URL support:
			reader = new FileReader();
			reader.onload = function(e) {
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));