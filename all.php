<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<link rel="stylesheet" href="c/c.css">
	 
</head>
<body class="w100">

<script type="text/javascript" src="j/menuhead.js"></script>

<script type="text/javascript" src="j/menu.js"></script>

 <a href="#" onclick="find();">Find in This Page...</a>
 
 <div id="content">

<?php 
include('simple_html_dom.php');

$url = array('1400.html','254.html','3t.html','antoan.html','codoc.html','dpht.html','giaotiep.html','hoadanh.html','khac.html','kichban.html','minhbach.html','mocuop.html','songtot.html','tamthoai.html','tien.html','tuthieu.html','vothan.html');

foreach ($url as $value) {
	$html = file_get_html($value);  
	$noidung = $html->find('#content',0)->innertext;
	echo $noidung;
}

 

// foreach (new DirectoryIterator(__DIR__) as $file) {
//   if ($file->isFile()) {
//       print $file->getFilename() . "\n";
//   }
// }

?>

</div>

<script type="text/javascript" src="j/j.js"></script>

</body>
</html>
