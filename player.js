class Player {
    constructor(){
      this.index = null;
      this.health = 100;
      this.name = null;
      this.rank = null;
      this.x = 0;
      this.y = 0;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      console.log(this.index);
      database.ref(playerIndex).set({
        name:this.name,
        health:this.health,
        x: this.x,
        y: this.y
      });
    }
  

  updateFirst(){
      var playerIndex1 = "players/player1";
      var playerIndex2 = "players/player2";
     
        database.ref(playerIndex1).set({
          name:this.name,
          health:this.health,
          x: 100,
          y: 200,
          

        });
    
      
        database.ref(playerIndex2).set({
          name:this.name,
          health:this.health,
          x: displayWidth-120,
          y: 200
        });
      
      
    }

    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  
      /*getRank(){
        var getRankRef = database.ref('rank')
        getRankRef.on("value",(data)=>{
          this.rank = data.val();
        })
      }
  */
      static updateRank(rank1){
        database.ref('/').update({
          rank: rank1
        });
      }
  
  }