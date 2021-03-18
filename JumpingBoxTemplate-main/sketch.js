var canvas;
var music;
var ball;
var rectred;
var rectgreen;
var rectblue;
var rectyellow;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
rectred=createSprite(200,500,100,20)
rectred.shapeColor=("red")

rectyellow=createSprite(400,500,100,20)
rectyellow.shapeColor=("yellow")

rectgreen=createSprite(600,500,100,20)
rectgreen.shapeColor=("green")

rectblue=createSprite(800,500,100,20)
rectblue.shapeColor=("blue")

    //create box sprite and give velocity
ball=createSprite(600,200,20,20)
ball.shapeColor=("pink")
ball.velocityX=4
ball.velocityY=5

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
edge=createEdgeSprites()


ball.bounceOff(edge)
if(ball.isTouching(rectred) && ball.bounceOff(rectred)){
    ball.shapeColor="red"
    music.play()
}

if(ball.isTouching(rectblue) && ball.bounceOff(rectblue)){
    ball.shapeColor="blue"
    music.stop()
}

if(ball.isTouching(rectgreen) && ball.bounceOff(rectgreen)){
    ball.shapeColor="green"
}

if(ball.isTouching(rectyellow) && ball.bounceOff(rectyellow)){
    ball.shapeColor="yellow"
}

drawSprites();

    //add condition to check if box touching surface and make it box
}
