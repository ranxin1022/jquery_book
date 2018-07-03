$(function () {

/*
    $('form input[type=button]').click(function () {

        $.ajax({
            type: 'post',
            url: 'test.php',
            data: $('form').serialize(),
                //{
              //user : $('form input[name=user]').val(),
              //email: $('form input[name=email]').val()

            //},
            success: function(response, status, xhr){
                alert( $('form').serialize());
                $('#box').html(response);
            }
        });
    });

$('form input[name=sex]').click(function () {

       //$('#box').html(decodeURIComponent($(this).serialize()));
        //$('#box').html($(this).serializeArray());
        console.log($(this).serializeArray());

        var json  = $(this).serializeArray();
        console.log(json[0].name);
        $('#box').html(json[0].name);
    });

    // 初始化重复的属性
    $.ajaxSetup({
        type: 'post',
        url: 'test.php',
        data: $('form').serialize()});
    $('form input[type=button]').click(function () {

        $.ajax({

            success: function(response, status, xhr){
                alert( $('form').serialize());
                $('#box').html(response);
            }
        });
    });
*/
    $('form input[type=button]').click(function () {

        $.ajax({
            type: 'post',
            url: 'test.php',
            data: {
                user : $('form input[name=user]').val(),
                email: $('form input[name=email]').val()

            },
            success: function(response, status, xhr){
                alert( $('form').serialize());
                $('#box').html(response);
            }
        });
    });

    alert($.param({
        user : $('form input[name=user]').val(),
        email: $('form input[name=email]').val()

    }));

});