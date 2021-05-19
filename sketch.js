const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create()
  world = engine.world
 
  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground)
  
  var balloptions={
    restitution:1
  }
 
  ball = Bodies.circle(100,200,50,balloptions)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,800,20);
  fill("blue")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50);
}