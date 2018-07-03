$(function () {

    //第一步， 引入jQuery文件
    //第二步，引入validate.js
    //第三步，加载validate
    $('form').validate();
    //第四步，给表单字段设置，表单字段class="required"


    var user=['about', 'family', 'but', 'black'];
    $('form input[name=user]').autocomplete({
        source:user
    });



});