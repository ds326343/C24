
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



var engine;
var world;
var object;
var box1; 
function setup() {
  createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

box1= new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
ground = new ground(600,390,1200,20)
Pig1 = new Pig(810,350);
log1 = new log(810,260,300,PI/2);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
Pig2 = new Pig(810,220);
log2 = new log(810,180,300,PI/2);
box5 = new Box(810,130,70,70);
log3 = new log(760,120,150,PI/7);
log4 = new log(870,120,150,-PI/7);
bird1 = new bird(200,200);
}

function draw() {
  background(2);  

  
  Engine.update(engine);
  bird1.display();
  log4.display();
  log3.display();
  box5.display();
  box3.display();
  box4.display();
  Pig2.display();
  log2.display();
  log1.display();
  ground.display();
  Pig1.display();
  box1.display();
  box2.display();
  
}



