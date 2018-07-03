$(function(){
    //$('ul:last li:first').css('background-color', '#ccc');
    //$('li:not(.red)').css('background-color', '#ccc');
    $('li:even').css('background-color', '#ccc');
    $('li:odd').css('background-color', '#bbb');

    $('li').first().css('background-color', 'red');

    //alert($('.red').is($('li')));
    alert($('.red').is($('li').get(2)));
});