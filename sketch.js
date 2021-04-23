
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var circle1;
var circle1Hanger;
var hangingBar;
var pointB = {x:100,y:200}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    circle1 = Matter.Bodies.circle(200,300,20);
	World.add(world,circle1);

	hangingBar = Bodies.rectangle(400,100,400,10,{isStatic:true});
	World.add(world,hangingBar);

	circle1Hanger = Constraint.create(circle1,pointB)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
        
    fill(128,0,128);
    circle(circle1.position.x,circle1.position.y,20);

	fill(255);
	rect(hangingBar.position.x,hangingBar.position.y,400,10);
  
  drawSprites();
 
}