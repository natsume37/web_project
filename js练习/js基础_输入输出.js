/* console.log('哈哈哈哈');
alert('这是一个警告框');  //信息警告框
prompt('这是一个输入提示框'); // 输入提示框 */
// document.write('这是页面输出框');   //内用会在HTML页面输出

// 条件判断 三目运算符
// var i=3,j=4;
// alert((++i==j++)?true:false);

// 单向判断条件语句
/* var num1=1000;
var num2=200;
if(num1<num2){
    alert('你好，条件成立');
}
alert('对不起条件不成立') */

// 多项判断语句
// var num1=1000;
// var num2=200;
// if(num1>num2){
//     alert('条件成立')
// }
// else if(num1===num2){
//     alert('两数相等')
// }
// else if(num1<num2){
//     alert('num1<num2')
// }

/* switch(day){
    case 值1：


    case 值2：

    ...

    default:
} */

/* while(循环条件){
    循环代码
} */


// do ...while

// for循环 （与c一样）
/* var sum = 0;
for(var num=1;num<10;num++){
    sum +=1;
}
console.log(sum); */

// 函数 function

/* var a = '欢迎来到我的世界'
function send1(){
    var b = '巴黎'
    console.log(a+b)
}

send1() */


// 面向对象编程

var date;
date =new Date()
console.log('现在是：'+date.getHours()+'时'+date.getMinutes()+'分'+date.getSeconds()+'秒')
