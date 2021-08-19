nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(640, 480);
    
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log("poseNet is initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("noseX = " + nosex +" noseY = " + nosey);
    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = floor(leftwristx - rightwristx);
    console.log("leftWristX = " + leftwristx + " rightWristX = "+ rightwristx + " difference = " + difference);
}
}
function draw(){
background("cyan");
document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
fill("orange");
stroke("black");
square(nosex,nosey,difference);

}
