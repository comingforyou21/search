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
    //localStorage.removeItem("login");
    localStorage.clear();
    window.location.href = "https://vn.minghui.org/";
  }	
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
' <p>Chúng tôi đã cập nhật thêm menu "Kịch Bản Khác". Ấn Menu1 để xem</p>'+
' <span id="close">Đóng</span>'+
'</div>';
  

		
document.write(myvar);