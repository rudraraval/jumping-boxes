var canvas;
var music;
var block1, block2, block3, block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1= createSprite(60,580,200,20);
block1.shapeColor= "green" 

block2= createSprite(270,580,200,20);
block2.shapeColor= "red"
block3= createSprite(480,580,200,20)
block3.shapeColor="blue"
block4= createSprite(690,580,200,20)
block4.shapeColor="yellow"

//create box sprite and give velocity
ball=createSprite(100,200,40,40)
ball.shapeColor="white"
ball.velocityX= 4;
ball.velocityY= 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges= createEdgeSprites()
ball.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball)){
        ball.bounceOff(block1)
        ball.shapeColor="green"
      
        
    
    }

    if(block2.isTouching(ball)){
        ball.bounceOff(block2)
        ball.shapeColor="red"
        music.play()
    
    }

    if(block3.isTouching(ball)){
        ball.bounceOff(block3)
        ball.shapeColor="blue"
    
    }

    if(block4.isTouching(ball)){
       // ball.bounceOff(block4)
        ball.shapeColor="yellow"
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop()
    
    }
    drawSprites()
}
