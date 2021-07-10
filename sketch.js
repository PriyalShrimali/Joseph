const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var game
var gameState = 0;
var playerCount;
var player;
var database;
var form;
var cat;
var catimage;
var catattack;
var catwin;
var mouse;
var mouseattack;
var mousewin;
var mouseimage;
var milk;
var cheese;
var GameOver;
var Stadium;
var Load;
var allPlayers;
var cars= [];
function preload (){
    mouseimage = loadImage("Mouse.jpg");
    catimage = loadImage("Cat.jpg");
    mousewin = loadImage("MouseWin.jpg");
    catwin = loadImage("CatWin.jpg");
    mouseattack = loadImage("MouseAttack.jpg");
    catattack = loadImage("CatAttack.jpg");
    cheese = loadImage("Cheese.png");
    milk = loadImage("Milk.jpg");
    GameOver = loadImage("GameOver.webp");
    Stadium = loadImage("Stadium.jpg");
    Load = loadImage("BackGround.jpg");
}
function setup(){
    var canvas = createCanvas(displayWidth-20, displayHeight-170);
    engine = Engine.create();
    world = engine.world;

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
   
}

function draw(){
    background(Load);
    Engine.update(engine);

    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }

}