<?php
/**
 * Created by PhpStorm.
 * User: xin.ran
 * Date: 2017/10/24
 * Time: 下午9:21
 */
//这个文件是远程端： http://www.li.cc/jsonp.php
$_arr = array('a'=>1,
              'b'=>2,
              'c'=>3
    );

$_result = json_encode($_arr);
echo $_result;
?>