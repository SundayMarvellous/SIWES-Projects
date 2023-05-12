console.log(Hello Marvie);

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function(){
    mousex = event.clientX;
    mousey = event.clientY;
});

var grav = 0.99;
c.strokewidth = 5;
fuction randomcolor(){
    return(
        "rgba(" + 
        Math.round(Math.random() * 250) + "," + Math.round(Math.random() * 250) 
        + "," + Math.round(Math.random() * 250)  + Math.ceil(Math.random() * 10) / 10 + );)
}
