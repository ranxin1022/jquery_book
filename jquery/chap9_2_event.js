$(function () {
/*
    $(document).click(function (e) {

        alert('document');
    });

    $('div').click(function (e) {
        e.stopPropagation(); // 阻止冒泡
        alert('div');
    });

    $('input').click(function (e) {
        alert('input');
        e.stopPropagation(); // 禁止冒泡🚫

    });

    $('a').click(function (e) {
        e.preventDefault();
        alert('baidu');
    });

    //禁止表单提交
    $('input').click(function (e) {
       // e.preventDefault();
    })

    //禁止表单提交
    $('form').submit(function (e) {
        e.preventDefault();
    });
*/

    //阻止冒泡又禁止了默认行为
    $('a').click(function (e) {
        alert('baidu');
        return false;
        //e.preventDefault();
        //e.stopPropagation();

    });

    $(document).click(function (e) {

        alert('document');
    });

    $('div').click(function (e) {

        alert('div');
    });
});