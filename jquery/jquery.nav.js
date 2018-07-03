;(function ($) {
   
    $.fn.extend({
        'nav': function () {
            $('.nav').css({
                'list-style' : 'none',
                'margin': 0,
                'padding': 0,
                'display': 'none'
            });

            $('.nav').parent().hover(function () {
                //$(this).find('.nav').css('display', 'block');
                $(this).find('.nav').stop().slideDown();
            }, function () {
                //$(this).find('.nav').css('display', 'none');
                $(this).find('.nav').stop().slideUp();
            });
        }
    });


})(jQuery);