var ms=0 , s=0 , m=0;
var timer;
var stopwatchEl=document.getElementById("stopwatch")
var lapsContainer=document.getElementById("laps");

function start()
{
    if(!timer){
        timer=setInterval(run,10);
    }
    
}

function run()
{
    stopwatchEl.textContent=gettimer();
    ms++;
    if(ms==100)
    {
        ms=0;
        s++;
    }
    if(s==60)
    {
        s=0;
        m++;
    }
    
}

function p()
    {
       stoptimer() 
    }

function stop()
{
    stoptimer();
    ms=0;
    s=0;
    m=0;
    stopwatchEl.textContent=gettimer();
}

function stoptimer()
{
    clearInterval(timer);
    timer=false;
}
function gettimer()
{
    return (m<10 ? "0" +m:m) +":"+ (s<10 ? "0" +s:s) +":"+(ms<10 ? "0" +ms:ms);
}

function restart(){
    stop();
    start();
}
function lap()
{
    if (timer)
    {
        var li = document.createElement('li');
        li.innerText=gettimer();
        lapsContainer.appendChild(li);
    }
}

function reset_lap()
{
    lapsContainer.innerHTML="";
}