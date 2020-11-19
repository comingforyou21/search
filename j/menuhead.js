var x = localStorage.getItem('login');
if (!x) {
	var person = prompt("Nhập pass: ");
  if (person == "20071999") {
	localStorage.setItem('login', person);    
  } 
  else 
  {
    localStorage.removeItem("login");
    window.location.href = "https://vn.minghui.org/news";
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
'		'+
'</div>';
		
document.write(myvar);