function _tplimagescroll_UpMarquee(id)
{
    try
    {
        var demo = document.getElementById(id);
        var demo1 = demo.childNodes[0].nodeType == 3?demo.childNodes[1]:demo.childNodes[0];
        var demo2 = demo.childNodes[demo.childNodes.length-1].nodeType == 3?demo.childNodes[demo.childNodes.length-2]:demo.childNodes[demo.childNodes.length-1];
        if(demo2.offsetHeight-demo.scrollTop<=0)
        {
            demo.scrollTop-=demo1.offsetHeight
        }
        else
        {
            demo.scrollTop++;
        }
    }
    catch(e)
    {
    }
}
function _tplimagescroll_UpInit(id,speed)
{
    if(speed < 1)
    {
        speed = 1;
    }
    var MyMar=setInterval("_tplimagescroll_UpMarquee('"+id+"')",speed);
    var demo = document.getElementById(id);
    var demo1 = demo.childNodes[0].nodeType == 3?demo.childNodes[1]:demo.childNodes[0];
    var demo2 = demo.childNodes[demo.childNodes.length-1].nodeType == 3?demo.childNodes[demo.childNodes.length-2]:demo.childNodes[demo.childNodes.length-1];
    demo.onmouseover = function() {clearInterval(MyMar);}
    demo.onmouseout = function() {MyMar=setInterval("_tplimagescroll_UpMarquee('"+id+"')",speed);}
    demo2.innerHTML = demo1.innerHTML;
}
function _tplimagescroll_LeftMarquee(id)
{
    try
    {
        var demo = document.getElementById(id);
        var d1 = demo.childNodes[0].nodeType == 3?demo.childNodes[1]:demo.childNodes[0];
        var d2 = d1.childNodes[0].nodeType == 3?d1.childNodes[1]:d1.childNodes[0];
        var d3 = d2.childNodes[0].nodeType == 3?d2.childNodes[1]:d2.childNodes[0];
        var demo1 = d3.childNodes[0].nodeType == 3?d3.childNodes[1]:d3.childNodes[0];
        var demo2 = d3.childNodes[d3.childNodes.length-1].nodeType == 3?d3.childNodes[d3.childNodes.length-2]:d3.childNodes[d3.childNodes.length-1];
        if(demo2.offsetWidth-demo.scrollLeft<=0)
        {
            demo.scrollLeft-=demo1.offsetWidth;
        }
        else
        {
            demo.scrollLeft++;
        }
    }
    catch(e)
    {
    }
}
function _tplimagescroll_LeftInit(id,speed)
{
    if(speed < 1)
    {
        speed = 1;
    }
    var MyMar=setInterval("_tplimagescroll_LeftMarquee('"+id+"')",speed);
    var demo = document.getElementById(id);
    var d1 = demo.childNodes[0].nodeType == 3?demo.childNodes[1]:demo.childNodes[0];
    var d2 = d1.childNodes[0].nodeType == 3?d1.childNodes[1]:d1.childNodes[0];
    var d3 = d2.childNodes[0].nodeType == 3?d2.childNodes[1]:d2.childNodes[0];
    var demo1 = d3.childNodes[0].nodeType == 3?d3.childNodes[1]:d3.childNodes[0];
    var demo2 = d3.childNodes[d3.childNodes.length-1].nodeType == 3?d3.childNodes[d3.childNodes.length-2]:d3.childNodes[d3.childNodes.length-1];
    demo.onmouseover = function() {clearInterval(MyMar);}
    demo.onmouseout = function() {MyMar=setInterval("_tplimagescroll_LeftMarquee('"+id+"')",speed);}
    demo2.innerHTML = demo1.innerHTML;
}