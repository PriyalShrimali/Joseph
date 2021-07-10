class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    cat = createSprite(200, displayHeight / 2 - 100, 50, 50)
    cat.scale = 0.3
    mouse = createSprite(displayWidth / 2 - 300, 100, 30, 30)
    mouse.scale = 0.3
    cat.addImage("cat", catimage)
    mouse.addImage("mouse", mouseimage)
    cars = [cat, mouse];
    cat.debug = true;
    mouse.debug = true;
    cat.setCollider("rectangle", 200, 0, 1000, 1000)
    player.updateFirst();
  }

  play() {

    form.hide();
    image(Stadium, 0, 0, displayWidth, displayHeight);
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      background(rgb(198, 135, 103));
      image(Stadium, 0, 0, displayWidth, displayHeight);

      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        x = allPlayers[plr].x;
        //use data form the database to display the cars in y direction
        y = allPlayers[plr].y;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (index === player.index) {

          /*stroke(10);
          
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";*/

          fill("red");



        }
        //F
        if (keyIsDown(70) && cat.isTouching(mouse) && player.index === 1) {
          //cat.addImage("cat", catattack)
          player.health -= 20;
          player.x = 100;
          player.y = 200;
          player.update();
        }
        //D
        if (keyIsDown(68) && mouse.isTouching(cat) && player.index === 2) {
          //mouse.addImage("mouse", mouseattack)
          player.health -= 20;
          player.x = displayWidth - 120;
          player.y = 200;
          player.update()
        }

        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].health, 120, 20)
      }

    }

    if (keyIsDown(UP_ARROW)) {
      player.y -= 5
      player.update()
    }



    if (keyIsDown(LEFT_ARROW)) {
      player.x -= 5
      player.update()
    }

    if (keyIsDown(DOWN_ARROW)) {
      player.y += 5
      player.update()
    }

    if (keyIsDown(RIGHT_ARROW)) {
      player.x += 5
      player.update()
    }

    drawSprites();
  }
  end() {
    console.log("Game Ended");
    console.log(player.rank)
  }
}