
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var stone,boy;
var tree,mango1,mango2,mango3,mango4,mango5;
var sling;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone= new Stone(100,425,50);
	boy=new Boy(400,500,300,300);
	tree=new Tree(1200,350,500,500);
	mango1=new Mango(1200,200,50,50);
	mango2=new Mango(1260,250,50,50);
	mango3=new Mango(1100,300,50,50);
	mango4=new Mango(1300,200,50,50);
	mango5=new Mango(1350,300,50,50);
	sling=new Sling(stone.body,{x:275,y:425})
	
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 boy.display()
 tree.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 sling.display();

 detectcollision(stone,mango1)
 detectcollision(stone,mango2)
 detectcollision(stone,mango3)
 detectcollision(stone,mango4)
 detectcollision(stone,mango5)


	keyPressed();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    
}

function mouseReleased(){
    sling.fly();
}

function detectcollision(lStone,lMango){
	MangoBodyPosition=lMango.body.position
	StoneBodyPosition=lStone.body.position

	var distance=dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
	if(distance<=lMango.r+lStone.r){
		Matter.Body.setStatic(lMango.body,false);

	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		sling.attach(stone.body)
	}
}



