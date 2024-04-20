
const game = new Game
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  function handleKeyDown(event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    console.log(event)
    if(possibleKeystrokes.includes(key)){
      event.preventDefault()
      switch(key){
        case "ArrowLeft":
          game.player.directionX = -1
          break;
        case "ArrowUp":
          game.player.directionY = -1
          break;
        case "ArrowRight":
          game.player.directionX = 1
          break;
        case "ArrowDown":
          game.player.directionY = 1
          break;
      }
    }
  }
  window.addEventListener("keydown", handleKeyDown)
  startButton.addEventListener("click", function () {
    startGame();
  });
  function startGame() {
    console.log("start game");
    game.start()
  }
  restartButton.addEventListener("click",function() {
    location.reload();
  })
}
