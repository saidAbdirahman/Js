var Player1 = Math.floor(Math.random()*6) + 1
var Player2 = Math.floor( Math.random()*6) + 1
      if (Player1 === 1){
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice1.png")
      }else if(Player1 === 2){
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice2.png")
      }else if(Player1 === 3){
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice3.png")
      }else if(Player1 === 4){
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice4.png")
      }else if(Player1 === 5){
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice5.png")
      }else if(Player1 === 6){
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice6.png")
      }

      if (Player2 === 1){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice1.png")
      }else if(Player2 === 2){
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice2.png")
      }else if(Player2 === 3){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice3.png")
      }else if(Player2 === 4){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice4.png")
      }else if(Player2 === 5){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice5.png")
      }else if(Player2 === 6){
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png")
      }

      if(Player1>Player2){
        document.querySelector(".container h1").textContent="Player 1 wins"
      }else if(Player2>Player1){
        document.querySelector(".container h1").textContent="Player 2 wins"
      }else{
        document.querySelector(".container h1").textContent="It's a tie"
      }