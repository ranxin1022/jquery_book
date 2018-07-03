$(function () {
    //普通绑定bind,
    //普通解绑unbind

    //事件委托live, delegate
    //解除委托 die, undelegate

    //新方法绑定： on
    // 新方法解绑： off
    // 仅执行一次的绑定： one

    /*
    $('.button').on('click', function () {
       alert('替代bind');
    });
    $('.button').on('click', {user:function(){return 'heng'}},function (e) {
        alert(e.data.user());
    });
    $('.button').on('click', {user:function(){return 'heng'}},function (e) {
        alert(e.data.user());
    }).trigger('click');

    $('form').on('submit', function () {
        alert('hehe');
    });
    
    $('#box').on('click', '.button', function () {
        $(this).clone().appendTo('#box');
    });

    $('#box').off('click', '.button');

    //仅一次事件触发
    $('.button').one('click',function () {
        alert('仅一次事件触发');
    });
    */



    //仅一次事件委托
    $('#box').one('click', '.button', function () {
        $(this).clone().appendTo('#box');
    })
});