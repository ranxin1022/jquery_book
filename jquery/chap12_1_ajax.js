$(function () {

    /*
    $('input').click(function () {
        $('#box').load('test.html .123', {
            url: 'test'
        }, function(response, status, xhr){
            alert("response: "  + response);
            alert('status: ' + status);
            alert('xhr statusText:' + xhr.statusText);
        });
    });


    $('input').click(function () {
       $.get('test.html', function (response, status, xhr) {
           //alert(response);
           $('#box').html(response);
       })
    });

    //通过直接在url问号紧跟传参
    $('input').click(function () {
        $.get('tsconfig.json',function (response, status, xhr) {
            alert(response);
            $('#box').html(response.toString());
        })
    });

    //通过直接在url问号紧跟传参
    $('input').click(function () {
        $.get('test.xml',function (response, status, xhr) {
            alert($(response).find('root').find('url').text());
            $('#box').html($(response).find('root').find('url').text());
        })
    });

    $('input').click(function () {
        $.get('tsconfig.json',function (response, status, xhr) {
            //alert($(response).find('user').json());
            //$('#box').html($(response).get(0)["user"]);
            $('#box').html($(response).get(0).user);
        })
    });
     */

    $('input').click(function () {
        $.getScript("test.js", function(response, status, xhr){
            //$('#box').html(response);
        });
    });



});