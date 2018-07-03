$(function () {
    /*
    $('.button').click(function () {
        $('#box').animate({
            left: '800px'
        }, 5000);
    });

    $('.stop').click(function () {
        $('#box').stop();
    });

    // 如果有列队动画， 停止的话， 停掉第一个， 继续执行后面的动画
    $('.stop').click(function () {
        $('#box').stop();
    });

    $('.button').click(function () {
        $('#box').animate({left: '800px'}, 2000)
                 .animate({bottom: '300px'}, 2000)
                 .animate({width: '300px'}, 2000)
                 .animate({height: '300px'}, 2000);
    });

    // 第一个参数， 如果为true, 完全停止， 默认值为false
    // 第二个参数， 如果为true，停止后跳转到末尾的位置上。
    $('.stop').click(function () {
        $('#box').stop(true, true);
    });

    $('#box').slideToggle('slow', function () {
        $(this).slideToggle('slow', arguments.callee);
    })

    $('.ani').click(function () {
        $(':animated').stop().css('background-color', 'blue');
    })
    //$.fx.interval = 500;
    $.fx.off = true;
    $.fx.off(true);
    $('.button').click(function () {
        $('#box').toggle(1000);
    });
    */

    $('.button').click(function(){
        alert('hehe');
        $('#box').animate({
            left: '500px'
        }, 3000, 'swing');
        $('#pox').animate({
            left: '500px'
        }, 3000, 'linear');
    });


});