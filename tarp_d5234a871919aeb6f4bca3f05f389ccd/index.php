<?php
$GLOBALS['_ta_rp_key'] = '8d49ad8c1c2a2f5632f1cc746f3fb39e';
$GLOBALS['_ta_reverse_proxy_id'] = 'ij40c7';

require 'bootloader_d5234a871919aeb6f4bca3f05f389ccd.php';

$options = array();
/*
$options = array(
	'replace' => array(
		'This is the text to find' => 'The new text',
		'This is the text to find 2' => 'The new text 2',
	)
);
*/

$tarp = new TARPLoader($options);

$tarp->excute();
?>