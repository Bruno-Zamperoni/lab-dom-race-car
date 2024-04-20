class Player{
    constructor(gameScreen, left, top, width, heigth, imgsrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.heigth = heigth;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgsrc;
        this.element.style.position = "absolute"
        this.element.style.width = `${width}px` 
        this.element.style.height = `${heigth}px`
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
        this.gameScreen.appendChild(this.element);
    }
    move(){
        this.left += this.directionX;
        this.top += this.directionY;
        if(this.left < 10){
            this.left = 10;
        }
        if(this.top < 10){
            this.top = 10;
        }
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
      
        if (this.top > this.gameScreen.offsetHeight - this.heigth - 10) {
            this.top = this.gameScreen.offsetHeight - this.heigth - 10;
        }
        this.updatePosition();
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;  
        this.element.style.top = `${this.top}px`;  
    }
    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }
    }
}