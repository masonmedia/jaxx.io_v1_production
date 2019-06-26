<?php
header('Access-Control-Allow-Origin: *');
//$strTitle = "Sample Title";
//$strDescription = "Sample Description";
//echo $strTitle;
//echo $strDescription;
// Platform choices: android, ios, desktop, safari, chrome, firefox, default
$section = file_get_contents('./change-log.json');

echo $section;

?>