<?php
header('Access-Control-Allow-Origin: *');

$section = file_get_contents('./jaxx-augur-rep-contract-address.json');

echo $section;

?>