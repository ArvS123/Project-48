
var forestimg;
var monkeyimg;
var obstacleimg;
var bananaimg;

var monkey;
var forest;
var berry;
var banana;

var score = 0;

var PLAY = 1;
var END = 0;
var gamestate = 1;


function preload(){
  forestimg = loadImage("./assets/forest.webp");
  monkeyimg = loadImage("./assets/monkey.webp");
  bananaimg = loadImage("./assets/banana.jpg");
  obstacleimg = loadImage("./assets/PosinousBerry.jpg");
}

function setup() {
  createCanvas(400,400);
  

  monkey = createSprite(160,340,20,20);
  monkey.scale = 0.09;
  monkey.addImage(monkeyimg);

  
}

function draw() {
  background(forestimg);  
  

  monkey.x = World.mouseX;

  edges = CreateEdgeSprites();
  monkey.collide(edges);

  var select_sprites = Math.round;

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createBanana();
    } else if (select_sprites == 2){
      createBerry();
    }
  }
}

if(banana.isTouching(monkey)){
  score = score+1;
} 
else if(berry.isTouching(monkey)){
  gamestate = END;
}

drawSprites();
textSize(20);
fill(255);
text("Score:" + score,10,30);

function createBanana(){
  banana = createSprite(random(50,350),40,10,10);
  banana.addImage(bananaimg);
  banana.scale=0.07;
  banana.velocityY = 3;
  banana.lifetime = 150;
}

function createBerry(){
  berry = createSprite(random(50,350,40,10,10));
  berry.addImage(obstacleimg);
  berry.scale = 0.07;
  berry.velocityY = 3;
  berry.lifetime = 150;
}