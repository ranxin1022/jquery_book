/*
foo = "window";
var myObject = {

    foo: "bar",
    func: function(){

        var self = this;
        console.log("outer func: this.foo = " + this.foo);
        console.log("outer func: self.foo = " + self.foo);
        (function(){
            console.log("inner func: this.foo = " + this.foo);
            console.log("inner func: self.foo = " + self.foo);
        })();
    }
};

myObject.func();


function updateCount(){
    var count = 0;
    function getCount(val){
        count = val;
        console.log(count);
    }
    return getCount;
}

var count = updateCount();
count(25);


for(var i =0;i<5;i++){
    (function(val){
        setTimeout(function(){
            console.log(val);
        }, 5000);
    })(i);


}

function foo1(){
    return{
        bar : "hello"
    };
}


function foo2(){
    return
    {
        bar : "hello"
    };
}

console.log("foo1:" + foo1());
console.log("foo2:" + foo2());


console.log("NaN typeof is:" + typeof NaN);
console.log("23 is NaN? " + isNaN(23));

var r1 = "0.005";
r1 = ('' + r1).split('.')[1].length
console.log("0.005：" + r1);

console.log(Number.isInteger(24));

console.log("the order of 1, 2, 3, 4：");
(function(){
    console.log(1);
    setTimeout(function(){
        console.log(2);
    }, 1000);
    setTimeout(function(){
        console.log(3);
    }, 0);
    console.log(4);
})();


var f = 2;
function fff(){
    var f = 5;
};

fff();
console.log("f: " + f);

function isPalindrome(str){
    str = srt.replace(/\W/g, "").toLowerCase();
    console.log(str);
}


$(function(){
    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function(index){
            return function(){
                alert("button " + index);
            };
             }(i));
        document.body.appendChild(btn);
    }
});


var str = "test";
console.log(str.split('').reverse().join(''));
var arr1 = "john".split(''); //j o h n
var arr2 = arr1.reverse(); //n h o j
var arr3 = "jones".split(''); //j o n e s
arr2.push(arr3);
console.log(arr1);

arr2.concat(['a']);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
//console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


console.log(1 + "2" + "2"); //122
console.log(1 + +"2" + "2"); // 32
console.log(1 + -"1" + "2"); //02
console.log(+"1" + "1" + "2"); //112
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);


$(function(){

    for (var i = 0; i < 5; i++) {
        setTimeout(function() { console.log(i); },5000 );
    }
});


console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

console.log(1 && 2 && 0); //0
console.log(1 && 0 && 1); //0
console.log(1 && 2 && 3); //3

console.log(false == '0');
console.log(false === '0');



var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
console.log(b);


console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
console.log(10*9*8*7*6*5*4*3*2);

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
*/
/*
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};
var secret = hero.getSecretIdentity;
console.log(secret.call(hero));
console.log(hero.getSecretIdentity());
*/


$(function () {
/*
    $('button').bind('click', function () {
       alert('hehe');
    });
    */
    $("html").append("<button>click2</button>");


    $(document).on('click', 'button', function () {
       //alert('hehe');
    });

    $('#expander').animate({
        width: '200px',
        height: '200px'
    }, 3000);

    //$("div").css("width", "300px").add("p").css("background-color", "red");
    $("div").add( "<p id='new'>new paragraph</p>" )
        .css( "background-color", "green" );


    (function ($) {
        $.fn.extend({
            "bold": function () {
                return this.css({fontWeight: "bold", background: "red"});
            }
        });
    })(jQuery);

    $('#bold').bold();

    $('#hideImg').on('click', function () {
       $('img').hide();
    });

    $('div').each(function (index) {
        //alert(index + "|" + $(this).html());
    });

    $('p a').each(function (index) {
        //alert(index + $(this).html());
    })
    //alert($('#333').attr('href', 'www.163.com'));
    $('#333').attr('href', 'http://www.163.com');

    $('#333').on('click', function (e) {
        //return false;

    });

   $('#delete').on('click', function (e) {
       e.preventDefault();
       alert('delete11');
       //return false;
   });
    $('#delete').on('click', function (e) {
        e.preventDefault();
        alert('delete22');
        //return false;
    });

    $("[id$='test']")
    //var deleteDiv = $('#delete').detach();
    //var deleteDiv = $('#delete').remove();
    //deleteDiv.appendTo('body');
    //console.log($('#333').remove());


});