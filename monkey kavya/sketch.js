                                                    
var monkey, monkey_running;
var banana ,bananaImage, rock, rockImage;
var FoodGroup, rockGroup;
var score;

var ground;

var bananaGroup;

var score=0;


function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");      
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  
monkey=createSprite(50,350);
monkey.addAnimation("monkey",monkey_running);
  
monkey.scale=0.12; 
  
  bananaGroup=new Group()
  rockGroup=new Group()
}


function draw() {
background("skyblue")
  
  text("how long you have been alive: "+ score, 120,50);
  
 ground = createSprite(200,400,400,60); 
 ground.shapeColor=("lightgreen")  
  
 monkey.collide(ground);
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y > 250) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY +0.8;
  
  if(frameCount%50===0){
   score=score+1; 
  }
  
  
  rocks();
 food();
drawSprites();  
}

function food(){
 
  if(frameCount%80===0){
    var randy = Math.round(random(120,200));
    var randx = Math.round(random(10,390));
    
  banana = createSprite(randx,randy);
    banana.addAnimation("banana", bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    
    
  banana.lifetime = 100;
    
    bananaGroup.add(banana)
}
}

function rocks(){
 
  if(frameCount%300===0){
    var randomx = Math.round(random(120,200));
    
    rock=createSprite(randomx,335)
    
    rock.addAnimation("rock", rockImage);
    rock.scale=0.2
    rock.lifetime=50;
    
    rockGroup.add(rock)
    
    
    
    
  }
}




