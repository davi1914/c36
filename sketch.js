var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCont;

function preload(){
   
  backgroundImage =loadImage("./assets/planodefundo.png");

}

function setup(){
  
  canvas = createCanvas(windowWidth,windowHeigth);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;

}
 
function draw(){

  background(bgImg);
  drawsprites()

}

function windowResized(){

   resizeCanvas(windowWidth,windowHeigth) 
}