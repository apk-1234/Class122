draw_circle="";
draw_rect="";
x=0;
y=0;
var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as "+content;
    if(content=="Circle")
    {
        document.getElementById("status").innerHTML="System is drawing "+content;
        draw_circle="set";
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
    }
    if(content=="Rectangle")
    {
        document.getElementById("status").innerHTML="System is drawing "+content;
        draw_rect="set";
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
    }
}
function setup()
{
    canvas=createCanvas(900,600);
}
function draw()
{
    if(draw_circle=="set")
    {
        radius=Math.floor(Math.random()*150);
        circle(x,y,radius);
        draw_circle="";
        document.getElementById("status").innerHTML="Circle is drawn";
    }
    if(draw_rect=="set")
    {
        rect(x,y,70,50);
        draw_rect="";
        document.getElementById("status").innerHTML="Rectangle is drawn";
    }
}