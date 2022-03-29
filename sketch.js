var path,cat,food,food2,food3,dog;
var pathImg,catImg,food1Img,food2Img,food3Img,catImg;
var foods = 0;
var food1G,food2G,food3G,dogGroup;
var gover;

var PLAY=1;
var END=0;
var gameState=1;

var food= 0;

function preload(){

    pathImg = loadImage("grama2.jpg");
    catImg = loadImage("gato.png",);
    food1Img = loadImage("food1.jpg");
    food2Img = loadImage("food 2.jpg");
    food3Img = loadImage("food3.jpg");
    dogImg = loadImage("dog.jpg");
    gover = loadImage("gameOver2.png");

}

function setup() {
    createCanvas(400,600);
   
      
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.scale=4.5;
    path.velocityY=4;
    
    
    
    cat = createSprite(175,450,50,50);
    cat.addImage(catImg);
    cat.scale=0.30;
    cat.debug=true
    
    food1G=new Group();
    food2G=new Group();
    food3G=new Group();
    dogGroup=new Group();
}

function draw() {
    if(gameState===PLAY){
        background(0);
        cat.x = World.mouseX;
        
        edges= createEdgeSprites();
        cat.collide(edges);
        
        if(path.y > 415 ){
            path.y = height/2;
          }
        
        
          createFood1();
          createFood2();
          createFood3();
          createDog();
      
          if (food1G.isTouching(cat)) {
            food1G.destroyEach();
            food=food+1;
          }
          else if (food2G.isTouching(cat)) {
            food2G.destroyEach();
            food=food+3;
            
          }else if(food3G.isTouching(cat)) {
            food3G.destroyEach();
            food= food + 5;
            
          }else{
            if(dogGroup.isTouching(cat)) {
              gameState=END;
             
              
              food1G.destroyEach();
              food2G.destroyEach();
              food3G.destroyEach();
              dogGroup.destroyEach();
              
              food1G.setVelocityYEach(0);
              food2G.setVelocityYEach(0);
              food3G.setVelocityYEach(0);
              dogGroup.setVelocityYEach(0);
              
      
              var  over = createSprite(180,280,20,20);
                over.addImage(gover);
                over.scale=0.7
      
              
           
          }
        }
        drawSprites();
        textSize(20);
        fill(255);
        text("Food: "+ food,10,30)
        
        }

   

}

function createFood1() {
    if (World.frameCount % 200 == 0) {
    food1 = createSprite(Math.round(random(50, 350),40, 10, 10));
    food1.addImage(food1Img);
    food1.scale=0.3;
    food1.velocityY = 3;
    food1.lifetime = 150;
    food1G.add(food1);
    }
}

function createFood2() {
    if (World.frameCount % 320 == 0) {
    food2 = createSprite(Math.round(random(50, 350),40, 10, 10));
    food2.addImage(food2Img);
    food2.scale=0.3;
    food2.velocityY = 3;
    food2.lifetime = 150;
    food2G.add(food2);
  }
  }

  function createFood3() {
    if (World.frameCount % 410 == 0) {
    food3 = createSprite(Math.round(random(50, 350),40, 10, 10));
    food3.addImage(food3Img);
    food3.scale=0.3;
    food3.velocityY = 3;
    food3.lifetime = 150;
    food3G.add(food3);
    }
  }

  function createDog(){
    if (World.frameCount % 530 == 0) {
     dog = createSprite(Math.round(random(50, 350),40, 10, 10));
    dog.addImage(dogImg);
    dog.scale=0.3;
    dog.velocityY = 3;
    dog.lifetime = 150;
    dogGroup.add(dog);
    }
  }