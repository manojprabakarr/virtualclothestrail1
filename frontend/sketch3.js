let img; 
let video;
let poseNet;
let leftShoulderX=0;
let leftShoulderY=0;
//let rightShoulderX=0;
//let rightShoulderY=0;

function setup() {
   let dev= createCanvas(600,400);
  dev.center()
  img = loadImage('http://localhost:3000/imag33.png'); 
  video = createCapture(VIDEO);
   video.hide();
 
   poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight); }
function gotPoses(poses) {
  console.log(poses);
  if (poses.length>0){
  leftShoulderX =poses[0].pose.keypoints[6].position.x;
   leftShoulderY =poses[0].pose.keypoints[6].position.y;
   //rightShoulderX =poses[0].pose.keypoints[11].position.x;
  // rightShoulderY =poses[0].pose.keypoints[11].position.y;
  }
}
function modelReady() {
  console.log('model ready')
}

function draw() {
 
  
  image(video,0,0)
  
  image(img,leftShoulderX,leftShoulderY,150)
}

