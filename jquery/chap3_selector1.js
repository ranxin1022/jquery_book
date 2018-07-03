$(function(){
   //$('.pox').css('color', 'blue');
   // $('div,p,strong').css('color', 'red');
    //$('#box').find('p').css('color', 'green');
    //$('#box>p').css('color', 'red');
    //$('div > p').css('color', 'orange');
    $('#box').children('p').css('color', 'green');

    $('a[title^=num]').css('color', 'red');
});