<?php
header('Access-Control-Allow-Origin: *');
//$strTitle = "Sample Title";
//$strDescription = "Sample Description";
//echo $strTitle;
//echo $strDescription;
// coinType must match the pouch parameters
// BTC, ETH, DASH, DOGE, ETC, LTC, SBTC, LSK, REP
$section = file_get_contents('./jaxx-coin-bulletin.json');
echo $section;

?>