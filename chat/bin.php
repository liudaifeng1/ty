<?php
if($_POST["flag"]==1){
	BingImage('urlBase');
}
function BingImage(){
    $args = func_get_args();
    global $zbp;
    if($args[0]=='tag'){
        $e='<img src="http://cn.bing.com'.BingImage_GetXML('urlBase').'" alt="'.BingImage_GetXML('copyright').'" title="'.BingImage_GetXML('copyright').'" height="'.$args[1].'" width="'.$args[2].'" />';
    }elseif($args[0]=='copyright'){
        $e =BingImage_GetXML($args[0]);
    }elseif($args[0]=='urlBase'){
        $e='http://cn.bing.com'.BingImage_GetXML('urlBase');
    }
    echo $e;
}

function BingImage_GetXML($type){
    $xurl=file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
    if(preg_match("/<".$type.">(.+?)<\/".$type.">/ies",$xurl,$murl)){
        $iurl=$murl[1];
        return $iurl;
    }
}
?>