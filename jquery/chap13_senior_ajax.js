$(function () {
    $(document).ajaxStart(function () {
       $('.loading').show();
    }).ajaxStop(function () {
        $('.loading').hide();
    }).ajaxError(function () {
        alert('全局错误');
    }).ajaxStart(function () {
        alert('发送请求之前');
    }).ajaxComplete(function () {
        alert('请求完成后， 不管是否失败成功');
    }).ajaxSuccess(function () {
        alert('请求成功后');
    });

    $('input[type=button]').on('click', function(){
        $.ajax({

            type: 'POST',
            url: 'test.php',
            success : function(response, status, xhr){
                alert('hehe');
                $('#data').html(response);
            },
            error: function(xhr, errorText, errorStatus){
              alert(errorText + ":" + errorStatus);
            },
            timeout: 2000
        });
    });

});