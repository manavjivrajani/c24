
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine
var Ground
var Paperball
var box1,box2,box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Ground=new ground(400,670)
    Paperball=new paper(150,600);

  //Create the Bodies Here.
  box1=createSprite(600,660,200,20);
	box1.shapeColor=color("white");

	box2=createSprite(690,620,20,100);
	box2.shapeColor=color("white");

	box3=createSprite(490,620,20,100);
	box3.shapeColor=color("white");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Ground.display()
  Paperball.display()
  box1.display()
  box2.display()
  box3.display()

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:65,y:-85});
     
   }
 }
 