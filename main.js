leftwristX=0;
rightwristX=0;
difference=0;

function preload(){

}

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('model is initialised');
}

function draw(){
background('#1338BE');
document.getElementById("font_size").innerHTML="font size of text= "+difference+" px";
textSize(difference);
fill("red");
text('Lalithran',50,400);
}

function gotPoses(results){
if(results.length>0)
{
console.log(results);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
}
}
