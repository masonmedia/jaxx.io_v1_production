<?php
header('Access-Control-Allow-Origin: *');
//$strTitle = "Sample Title";
//$strDescription = "Sample Description";
//echo $strTitle;
//echo $strDescription;

$section = file_get_contents('./jaxx-privacy-policy.json');

echo $section;

?>