 
 
 
 <div id="content">

<?php 
include('simple_html_dom.php');

$url = array('1400.html','254.html','antoan.html','codoc.html','dpht.html','giaotiep.html','khac.html','kichban.html','kichban6.html','mocuop.html','songtot.html','tien.html','tuthieu.html','vothan.html');

foreach ($url as $value) {
	$html = file_get_html($value);  
	
	
	foreach($html->find('h2.tit') as $e) {
		$edit = $e->innertext;
		$id = $e->id;
        
        $e->outertext = '<h2 data-url="'.$value.'#'.$id.'" class="tit">'.$edit .' - [ chi tiết ]</h2>';
	}
    $html ->load($html ->save());
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

 
