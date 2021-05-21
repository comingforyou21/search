var x = localStorage.getItem('login');
var d=new Date();

if (x != d.getDay()) {
  localStorage.removeItem("thongbao");
	var person = prompt("Nhập pass: ");
  if (person == "20071999") {
	localStorage.setItem('login', d.getDay());
  } 
  else 
  {
    localStorage.removeItem("login");
    localStorage.removeItem("thongbao");
    window.location.href = "https://vn.minghui.org/";
  }	
}

var html = document.getElementsByTagName("html")[0];
  var rootResize = function () {
    var winClient = document.documentElement.clientWidth;
    var fontSize = winClient < 640 ? winClient / 16 : 30;
    if (fontSize < 20) {
      fontSize = 20;
    }
    html.style.fontSize = fontSize + "px";
  }

  rootResize();
  window.onresize = function () {
    rootResize();
  }

  
var myvar = '<div id="head">'+

'	<h1><a href="/search/">Crimeofccp V2</a></h1></h1>'+

'	<div id="headm">'+
'	<h2 class="i1"><a target="blank" href="/searchv1/">Version 1</a></h2></h2>'+
'	<h2 id="archivev2"><a href="luutru.html">Cá nhân</a></h2>'+
'	<h2 class="i2" onclick="openmenu2()"><a>Menu 2</a></h2>'+
'	<h2 class="i3" onclick="openmenu()"><a>Menu 1</a></h2>	'+
'	</div>'+
'</div>'+

//thongbao
'<div id="thongbao">'+
' <p>'+
'✅ Hỏi tổ chức  <a href="hoitochuc.html">Click</a>'+
'<br>✅ Hóa danh có thêm tiếng việt  <a href="hoadanh.html">Click</a>'+
'<br> Lưu ý: Các câu chào hỏi trên web chỉ mang tính tham khảo, nên thêm các biểu tượng mặt cười, ngắt câu, thêm dấu chấm, phẩy ... tránh tình trạng bị khóa nick do nhiêu người copy giống nhau.'+
'<br> Thông báo sẽ tự đóng sau 10 giây '+
' </p>'+
' <span id="close">Đóng</span>'+
'</div>';
	
document.write(myvar);