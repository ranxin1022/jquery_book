$(function () {

    //本地获取jsonp文件成功

    // 跨域获取jsonp文件
    $('form input[type=button]').click(function () {
        /*


        $.getJSON('jsonp.php', function (response) {
            alert(response);
            console.log(response);
        });

        $.getJSON('http://apistore.baidu.com/microservice/weather?citypinyin=beijing&callback=12332104444424495817445_1508852205610&_=1508852205611', function (response) {
           alert(response);
           console.log(response);
        });


        $.ajax({
            type: 'get',
            url: 'https://suggest.taobao.com/sug?code=utf-8&q=test',
            //url : 'http://apistore.baidu.com/microservice/weather?citypinyin=beijing&callback=?',
            dataType: 'jsonp',
            success: function (response, status, xhr) {
                console.log(response.result[0][1]);
                // $('#box').html(response);
            }
        });

        var jqXHR = $.ajax({
                        type: 'POST',
                        url: 'test.php',
                        data: $('form').serialize(),

                    });

        jqXHR.done(function (response) {
            alert(response);
            $('#box').html(response);
        }).done(function (response) {
            alert('htete');
        });
        */


alert('hehe');

        $.ajax({
            type: 'get',
            url: 'https://suggest.taobao.com/sug?code=utf-8&q=test123',
            //url : 'http://apistore.baidu.com/microservice/weather?citypinyin=beijing&callback=?',
            //url: 'test.php',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (response, status, xhr) {
                console.log(response.result);
                // $('#box').html(response);
            },
            error: function () {
                console.log('reject');
            }
        });

    });
});