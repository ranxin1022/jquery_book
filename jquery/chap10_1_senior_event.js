$(function () {

    /*
    $('input').click(function(){
        alert('使用模拟用户操作来触发');
    }).trigger('click');

    $('input').click(function(e, data1, data2){
        alert('使用模拟用户操作来触发' + data1 + '|' + data2);
    }).trigger('click', ['123', 'abc']);

    $('input').bind('click', {user:'lee'}, function(e){
        alert(e.data.user);
    });


    // click, mouseover 系统事件
    // 自定义事件没有和硬件绑定， 单独无法执行， 一般和trigger一起使用
    $('input').bind('hehe', function(){
        alert('hehe triger');
    }).trigger('hehe');

    $('input').click(function(){
        alert('click');
    }).click();
     */

    // trigger 提交后跳转， 没有阻止默认行为
    //$('form').trigger('submit');

    //
    //$('form').triggerHandler('submit');

    /*
    $('input').click(function () {
        alert('click trigger');
    }).trigger('click');
     alert($('input').click(function () {
        alert('click trigger');
    }).trigger('click'));

    $('div').bind('myEvent', function(){
        alert('heh');
    });
    $('.d1').trigger('myEvent');
$('input').bind('click.abc', function(){
    alert('abc');
});

$('input').bind('click.xyz', function(){
    alert('xyz');
});

$('input').unbind('click.abc');

  //.bind 绑定了三个事件
    $('.button').bind('click', function () {
        alert('事件不委托');
    })

     //使用事件委托
    $('.button').live('click', function () {
       alert('hehe');
    });

    $('.button').bind('click', function () {
        $(this).clone(true).appendTo('#box');
    })
*/

    $('#box').delegate('.button', 'click', function () {
        alert(this);
        $(this).clone().appendTo('#box');
    })



});