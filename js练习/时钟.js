var monthText=["壹月","贰月","叁月","肆月","伍月","陆月","柒月","捌月","玖月","拾月","拾壹月","拾贰月"];
var dayText=["壹号","贰号","叁号","肆号","伍号","陆号","柒号","捌号","玖号","拾号","拾壹号","拾贰号","拾叁号","拾肆号","拾伍号","拾陆号","拾柒号","拾捌号","拾玖号","贰拾号","贰拾壹号","贰拾贰号","贰拾叁号","贰拾肆号","贰拾伍号","贰拾陆号","贰拾柒号","贰拾捌号","贰拾玖号","叁拾号","叁拾壹号"];
var weekText=["星期日","星期壹","星期贰","星期叁","星期肆","星期伍","星期陆"];
var hourText=["零点","壹点","贰点","叁点","肆点","伍点","陆点","柒点","捌点","玖点","拾点","拾壹点","拾贰点","拾叁点","拾肆点","拾伍点","拾陆点","拾柒点","拾捌点","拾玖点","贰拾点","贰拾壹点","贰拾贰点","贰拾叁点"];
var minuteText=["壹分","贰分","叁分","肆分","伍分","陆分","柒分","捌分","玖分","拾分","拾壹分","拾贰分","拾叁分","拾肆分","拾伍分","拾陆分","拾柒分","拾捌分","拾玖分","贰拾分","贰拾壹分","贰拾贰分","贰拾叁分","贰拾肆分","贰拾伍分","贰拾陆分","贰拾柒分","贰拾捌分","贰拾玖分","叁拾分","叁拾壹分","叁拾贰分","叁拾叁分","叁拾肆分","叁拾伍分","叁拾陆分","叁拾柒分","叁拾捌分","叁拾玖分","肆拾分","肆拾壹分","肆拾贰分","肆拾叁分","肆拾肆分","肆拾伍分","肆拾陆分","肆拾柒分","肆拾捌分","肆拾玖分","伍拾分","伍拾壹分","伍拾贰分","伍拾叁分","伍拾肆分","伍拾伍分","伍拾陆分","伍拾柒分","伍拾捌分","伍拾玖分","陆拾分"];
var secondsText=["壹秒","贰秒","叁秒","肆秒","伍秒","陆秒","柒秒","捌秒","玖秒","拾秒","拾壹秒","拾贰秒","拾叁秒","拾肆秒","拾伍秒","拾陆秒","拾柒秒","拾捌秒","拾玖秒","贰拾秒","贰拾壹秒","贰拾贰秒","贰拾叁秒","贰拾肆秒","贰拾伍秒","贰拾陆秒","贰拾柒秒","贰拾捌秒","贰拾玖秒","叁拾秒","叁拾壹秒","叁拾贰秒","叁拾叁秒","叁拾肆秒","叁拾伍秒","叁拾陆秒","叁拾柒秒","叁拾捌秒","叁拾玖秒","肆拾秒","肆拾壹秒","肆拾贰秒","肆拾叁秒","肆拾肆秒","肆拾伍秒","肆拾陆秒","肆拾柒秒","肆拾捌秒","肆拾玖秒","伍拾秒","伍拾壹秒","伍拾贰秒","伍拾叁秒","伍拾肆秒","伍拾伍秒","伍拾陆秒","伍拾柒秒","伍拾捌秒","伍拾玖秒","陆拾秒"];
var clock;
var monthList=[];
var dayList=[];
var weekList=[];
var hourList=[];
var minuteList=[];
var secondsList=[];
var isCircle=false;
var textSet=[[monthText,monthList],[dayText,dayList],[weekText,weekList],[hourText,hourList],[minuteText,minuteList],[secondsText,secondsList]];
window.onload=function(){
    init();setInterval(function(){runTime();},100);
    changePosition();
    setTimeout(function(){changeCircle();},2000);
}
function init(){
    clock=document.getElementById('clock');
    for(var i=0;i<textSet.length;i++){
        for(var j=0;j<textSet[i][0].length;j++){
            var temp=createLabel(textSet[i][0][j]);
            clock.appendChild(temp);
            textSet[i][1].push(temp);
            }
        }
    }
function createLabel(text){
    var div=document.createElement('div');
    div.classList.add('label');
    div.innerText=text;
    return div;
}
function runTime(){
    var now=new Date();
    var month=now.getMonth();
    var day=now.getDate();
    var week=now.getDay();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var seconds=now.getSeconds();
    initStyle();
    var nowValue=[month,day-1,week,hour,minute,seconds];
    for(var i=0;i<nowValue.length;i++){
        var num=nowValue[i];
        textSet[i][1][num].style.color='red';
    }
if(isCircle){
    var widthMid=document.body.clientWidth/2;
    var heightMid=document.body.clientHeight/2;
    for(var i=0;i<textSet.length;i++){
        for(var j=0;j<textSet[i][0].length;j++){
            var r=(i+1)*35+50*i;
            var deg=360/textSet[i][1].length*(j-nowValue[i]);
            var x=r*Math.sin(deg*Math.PI/180)+widthMid;
            var y=heightMid-r*Math.cos(deg*Math.PI/180);
            var temp=textSet[i][1][j];
            temp.style.transform='rotate('+(-90+deg)+'deg)';
            temp.style.left=x+'px';
            temp.style.top=y+'px';
            }
        }
    
    }
}
function initStyle(){
    var label=document.getElementsByClassName('label');
    for(var i=0;i<label.length;i++){
        label[i].style.color='white';
    }
}
function changePosition(){
    for(let i=0;i<textSet.length;i++){
        for(let j=0;j<textSet[i][1].length;j++){
            let tempX=textSet[i][1][j].offsetLeft+"px";
            let tempY=textSet[i][1][j].offsetTop+"px";
            setTimeout(function(){textSet[i][1][j].style.position="absolute";
            textSet[i][1][j].style.left=tempX;textSet[i][1][j].style.top=tempY;},50);
        }
    }   
}
function changeCircle(){isCircle=true;clock.style.transform="rotate(90deg)";}