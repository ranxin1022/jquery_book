/*
$(function(){

    $('div').bind('click', function(){
        alert('heheh');
    });

    $('input').bind('click mouseover', function(){
        alert('弹窗!');
    });

    $('input').bind({
        'mouseover': function(){
            alert('移入');
        },
        'mouseout': function(){
            alert('移除');
        }
    });

    $(document).click(function(){
        alert('window');
    });

    $('div').mouseover(function(){
    $(this).css('background-color', 'red');
});
$('div').mouseout(function(){
    $(this).css('background-color', 'greenyellow');
});

$('div').mouseenter(function(){
    $(this).css('background-color', 'yellow');
})

    var object1 = {};
    var object2 = [];
   // alert(typeof object1 === "object");
   // alert(typeof object2 === "object");
    //alert(Object.prototype.toString.call(object1));
    //alert(Object.prototype.toString.call(object2));


    (function(){
        var a = b = 3;
    })();
    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
});

$(function () {
    $('div').focusout(function(){
        alert('heheh');
    });
});

*/

$(function () {
    $('div').hover(function () {
        $(this).css('background-color', 'black');
    }, function () {
        $(this).css('background-color', 'red');
    });

    $('div').dblclick(function (e) {
        alert(e.type);
    });
});