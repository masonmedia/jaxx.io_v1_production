<?php
header('Access-Control-Allow-Origin: *');
//$strTitle = "Sample Title";
//$strDescription = "Sample Description";
//echo $strTitle;
//echo $strDescription;

$section = json_decode(file_get_contents('./jaxx-terms-of-service.json'));
$section[0]->description = urldecode($section[0]->description);

echo json_encode($section);

?>