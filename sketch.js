
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxS1,boxS2,boxS3,boxB1,boxB2,boxB3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxS1 = createSprite(300,510,20,100);
	boxS1.shapeColor = "red";

	boxS2 = createSprite(480,510,20,100);
	boxS2.shapeColor = "red";

	boxS3 = createSprite(390,550,200,20);
	boxS3.shapeColor = "red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	boxB1 = Bodies.rectangle(300, 510 ,20, 100 , { isStatic:true});
	World.add(world, boxB1);

	boxB2 = Bodies.rectangle(480 , 510 ,20,100 , { isStatic:true});
	World.add(world, boxB2);

	boxB3= Bodies.rectangle(390 , 550 ,200, 55 , { isStatic:true});
	World.add(world, boxB3);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);
  }
}



