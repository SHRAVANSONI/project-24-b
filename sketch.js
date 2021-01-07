var box1,box2,box3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new Box(750,640,30,150);

	box2=new Box(650,680,170,40);

	box3=new Box(550,640,30,150);

	ball=new Ball(100,100,40)
  ground1=Bodies.rectangle(100,650,850,50,{isStatic:true});
  World.add(world,ground1)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  fill(255)
  rect(ground1.position.x,ground1.position.y,850,50);
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150});
  }
}

