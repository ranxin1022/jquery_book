$(function () {

    /*
    //可以传递两个参数， 一个是速度（以毫秒来控制速度）， 一个是回调函数
    $('.show').click(function () {
        $('#box').show(5000);
    });

    $('.hide').click(function () {
       $('#box').hide(5000);
    });

    $('.show').click(function () {
        $('#box').show('slow');
    });

    $('.hide').click(function () {
        $('#box').hide('fast');
    });
    $('.show').click(function () {
       $('#box').show('slow', function () {
            alert('显示完毕');
       }) ;
    });

    $('.hide').click(function () {
        $('#box').hide('slow', function () {
            alert('隐藏完毕');
        }) ;
    });


    */
    //列队动画, 递归自调用
    $('.show').click(function () {

        $('.test').first().show('slow', function testShow() {
            $(this).next().show('slow', testShow);
        }) ;


    });
    $('.hide').click(function () {

        $('.test').last().hide('slow', function testShow() {
            $(this).prev().hide('slow', testShow);
        }) ;


    });
    $('.toggle').click(function () {
        $('#box').toggle(1000);
    })



});