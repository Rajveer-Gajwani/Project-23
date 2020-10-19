var helicopterIMG, helicopterSprite, packageSprite,packageIMG,BG_img;
var packageBody,ground,BG;
var line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	BG_img = loadImage("ruins.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;


	engine = Engine.create();
	world = engine.world;


	var package_options = {
		restitution : 0.5,
		density : 2,
		isStatic : true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,package_options);
	World.add(world, packageBody);
	
var ground_options = {
	isStatic : true
}
	//Create a Ground
	ground = Bodies.rectangle(width/2,600,800,5,ground_options);
	World.add(world,ground);

	line1 = new Box(400,590,200,20);
	line2 = new Box(300,530,20,100);
	line3 = new Box(500,530,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);

  circle(packageBody.position.x,packageBody.position.y,10);

  line1.display();
  line2.display();
  line3.display();

keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.setStatic(packageBody,false);
  }
}



