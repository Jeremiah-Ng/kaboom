canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var background="mars.jpg";
var roverio="rover.png";
var x=20;
var y=20;
var rover_width=100;
var rover_height=100;
function add(){
    console.log("aedgs")
   bkobject=new Image();
   bkobject.onload=uploadBackground;
   bkobject.src=background;
   roverobject=new Image();
   roverobject.onload=uploadrover;
   roverobject.src=roverio;
}
function uploadBackground(){
    ctx.drawImage(bkobject,0,0, canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverobject,x,y, rover_width,rover_height);
}
window.addEventListener('keydown',keyd);
function keyd(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if(keypressed==37){
        left();
    }
    if(keypressed==38){
        up();
    }
    if(keypressed==39){
        right();
    }
    if(keypressed==40){
        down();
    }
}
function left(){
   if(x>=0){
    x=x-10
    uploadBackground();
    uploadrover();
   }
}
function right(){
    if(x<=700){
     x=x+10
     uploadBackground();
     uploadrover();
    }
 }
 function up(){
    if(y>=0){
     y=y-10
     uploadBackground();
     uploadrover();
    }
 }
 function down(){
    if(y<=490){
     y=y+10
     uploadBackground();
     uploadrover();
    }
 }