/*
$ = jQuery
jQuery(function(){
    alert('hehe');
});


alert($ === jQuery); 恒等

$(function(){
    alert(1);
});
$(function(){
    alert(2);
});
//$(function(){}); == $(document).ready(function(){});

//alert($);
*/
/*
//网页顺序执行， 页面元素还没有加载，如果直接写$().css()... 不会还行，
jQuery(function(){
    alert($('#xin').get(0));
    $('#xin').click(function(){
        alert('the first jquery program');
    });
    //alert($('#xin').css('color', 'red').css('background-color', 'green')); // 返回jQuery对象
});

*/

alert('heh');
console.log('heh');
jQuery.noConflict();
$$ = jQuery;
$$(function(){
    $$('#xin').click(function(){
        console.log("hehe");
        alert('the first jquery program');
    });
});