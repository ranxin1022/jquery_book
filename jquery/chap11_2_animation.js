$(function () {

    /*
    $('.button').click(function () {
        $('#box').animate({
            width: '300px',
            height: '200px',
            opacity: '0.5',
            fontSize: '50px'
        });
    });

    $('.button').click(function () {
        alert('hehe');
        $('#box').animate({
            left: '300px',
            top: '200px',
            width: '300px',
            height: '200px'
        }, 5000);
    });

    $('.button').click(function () {

        $('#box').animate({
            left: '300px'
        }, 1000, function () {
            $(this).animate({
                top: '200px'
            }, 1000, function(){
                $(this).animate({
                    width: '300px'
                },1000, function () {
                    $(this).animate({
                        height: '200px'
                    });
                });
            });

        });
    });

    $('.button').click(function () {
        $('#box').animate({left: '300px'})
                 .animate({top: '200px'})
                 .animate({width: '300px'})
                 .animate({height: '200px'})
                 .animate({opacity: 0.1});
    });
    */
    $('.button').click(function () {
        //css 不是动画方法，会默认排列到和第一个动画方法同步
       $('#box').slideUp('slow').slideDown('slow').queue(function (next) {
           $(this).css('background-color', 'red');
           next();
       }).hide('slow');
    });


});