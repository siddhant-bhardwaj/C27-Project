const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;
var ball;
var logConstraint;
var string;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var ball_options={
    restitution:1.0
}


    ground = Bodies.rectangle(200,100,200,20,ground_options);
    World.add(world,ground);
ball = Bodies.circle(200,300,20,ball_options);
World.add(world,ball);
    console.log(ground);

    
    string = new String(ball,ground);
}

function draw(){
    background(200);
    Engine.update(engine);
    rectMode(CENTER);

//Text("Press space to move the pendulum",200,50);
//Text("Press enter to stop the pendulum ",200,70);

    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    string.display();
    logConstraint.display();
}

function keyPressed(){
    if(keyCode===32){
        ellipse.position.x = 270;
        ellipse.position.y = 200;
    }
}