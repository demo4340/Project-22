const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5;
var ropeObject1,ropeObject2,ropeObject3, ropeObject4,ropeObject5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
	}

	bobObject1 =Bodies.circle(320,380,20,bob_options);
    World.add(world,bobObject1);

	bobObject2 = Bodies.circle(360,380,20,bob_options);
    World.add(world,bobObject2);

	bobObject3 = Bodies.circle(400,380,20,bob_options);
    World.add(world,bobObject3);

	bobObject4 = Bodies.circle(440,380,20,bob_options);
    World.add(world,bobObject4);

	bobObject5 = Bodies.circle(480,380,20,bob_options);
    World.add(world,bobObject5);
	
	
	ropeObject1=new Rope(bobObject1,roof,-80, 0)
	ropeObject2=new Rope(bobObject2,roof,-40, 0)
	ropeObject3=new Rope(bobObject3,roof,0, 0)
	ropeObject4=new Rope(bobObject4,roof,40, 0)
	ropeObject5=new Rope(bobObject5,roof,80, 0)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();
  
  ellipse(bobObject1.position.x,bobObject1.position.y,40,40);
  ellipse(bobObject2.position.x,bobObject2.position.y,40,40);
  ellipse(bobObject3.position.x,bobObject3.position.y,40,40);
  ellipse(bobObject4.position.x,bobObject4.position.y,40,40);
  ellipse(bobObject5.position.x,bobObject5.position.y,40,40);
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1,bobObject1.position,{x:-50,y:-45});
	}
}