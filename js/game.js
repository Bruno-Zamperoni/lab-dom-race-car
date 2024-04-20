class Game {
    // code to be added
    constructor(){
        this.startsScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = new Player(
            this.gameScreen,
            200,
            400,
            100,
            150,
            "./images/car.png");
        this.heigth = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrecuency = Math.round(1000/60);
    }
    start(){
        this.gameScreen.style.heigth = `${this.heigth}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startsScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        this.gameIntervalId = setInterval(() =>{
            this.gameLoop();
        }, this.gameLoopFrecuency); 
    }
    gameLoop(){
        //console.log("in the game loop");
        this.update();
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        }
    }
    update(){
       // console.log("in the update");
       this.player.move();
        this.obstacles.forEach((obstacle, index) =>{
            obstacle.move();
            if(this.player.didCollide(obstacle)){
                obstacle.element.remove();
                this.obstacles.splice(index,1);
                this.lives--;
                const livesCounter = this.gameScreen.parentElement.querySelector("#lives");
                livesCounter.innerText = this.lives;

            }else if(obstacle.top > this.heigth){
                this.score++;
                obstacle.element.remove()
                this.obstacles.splice(index,1);
                const scoreCounter =this.gameScreen.parentElement.querySelector("#score");
                scoreCounter.innerText = this.score;
            }
            if(this.lives == 0){
                this.endgame()
            }
            
        })
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen));
        }    
    } 
    endgame(){
        this.player.element.remove();
        this.obstacles.forEach((obstacle) => obstacle.element.remove())
        this.gameIsOver = true;
        this.gameScreen.style.display = "none"
        this.gameEndScreen.style.display = "block"
    }
}