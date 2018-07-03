$(function(){

    // 创建节点
    var box = $('<div id="box">heheh</div>');

    //$('div').append('<strong>hehe</strong>');
    /*
    $('div').append(function(index,html){

        return '<strong>strong</strong>';
    });
    $().insertAfter();
    $().insertBefore();
    $().after();
    $().before();
    */

    //$('div').wrap('<h1>');

    //$('div').wrap(function(){});

    $('div').click(function(){
        alert('hehe');
    });
    $('body').append($('div').clone(true));
});