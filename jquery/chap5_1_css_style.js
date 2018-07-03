$(function(){
    //alert($('div').css('color'));

    var css = $('div').css(['color', 'height', 'width']);
    /*
    for(var i in css){
        alert(i + ':' + css[i]);
    }


    $.each(css, function(index, value){
        alert(index + ':' + value);
    });
    //alert(css[1]);
    alert($('div')[0]);

    $('div').each(function(index, element){
       alert(index + ':' + element);
   });

   $('div').css({
       'color': 'red',
       'height': '200px',
       'background-color': 'black'
   });
    */
    $('div').css({

        'background-color': 'black'
    });
    var w = '200px';
    //alert($('div').css('width'));
    $('div').css('width',function(index, value){
        return parseInt(value) - 500 + 'px';
    });
   // alert($('div').css('width'));

    //$('div').addClass('red bg');
    //$('div').removeClass('bg');
    $('div').click(function() {
        $(this).toggleClass('red'); //两个样式的切换
    });

    $('div').width('500');

});