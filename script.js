const canvas = document.getElementById("gameFrame");
const ctx = canvas.getContext("2d");


// global variables for snake
let speedX = 20;
let speedY = 20;
let snakeX = Math.floor(Math.random() * 100);
let snakeY = Math.floor(Math.random() * 300);
let width = 20;
let height = 20;
let foodX = Math.floor(Math.random() * 380);
let foodY = Math.floor(Math.random() * 380);
let score = 0;
let count = 0;
let start = 0;


// this function let's you start the game
function Start(){
    setInterval(food , 1000/3);
    setInterval(snake, 1000 / 3);
    setInterval(SnakeBorder,1000/3);
    
    
}
// function for food update and score
function food() {
    ctx.fillStyle = "blue";
    ctx.fillRect(foodX, foodY, 10, 10);
    if(snakeX < foodX + 10 && snakeX + width > foodX && snakeY < foodY + 10 && snakeY + height > foodY ){
        ctx.clearRect(foodX,foodY,50,50);
        console.log("snake size increases");
        foodX = Math.floor(Math.random() * 380);
        foodY = Math.floor(Math.random() * 380);
        width += 8;
        height += 8;
        score += 1;
        
    }
    document.getElementById("score").innerHTML = "Score -" + score;
}

// for game reset if dead
function SnakeBorder(){
    if(snakeX > 460 || snakeX < 0  || snakeY <0 || snakeY >460 ){
        console.log("you ran on border");
        alert("Game over");
        window.location.reload();
    }
}

//  all the control using keyboard 
function snake() {
    ctx.fillStyle = "red";
    ctx.clearRect(snakeX, snakeY, width, height);
    
    console.log(count);
    switch (count) {
        case 1:
            snakeY += speedY;
            break;
            case -1:
                snakeY -= speedY;
            break;
        case 2:
            snakeX += speedX;
            break;
            case -2:
                snakeX -= speedX;
            break;
        }
        
        ctx.fillRect(snakeX, snakeY, width, height);
}

function changeDirection() {
    document.addEventListener("keyup", (event) => {
        if (event.key == "ArrowDown" && count != -1) {
            ctx.clearRect(snakeX, snakeY, width, height);
            ctx.fillRect(snakeX, snakeY, width, height);
            count = 1;
        } else if (event.key == "ArrowUp" && count != 1) {
            ctx.clearRect(snakeX, snakeY, width, height);
            ctx.fillRect(snakeX, snakeY, width, height);
            count = -1;

        }
        else if (event.key == "ArrowRight" && count != -2) {
            ctx.clearRect(snakeX, snakeY, width, height);
            ctx.fillRect(snakeX, snakeY, width, height);
            count = 2;
        }
        else if (event.key == "ArrowLeft" && count != 2) {
            ctx.clearRect(snakeX, snakeY, width, height);
            ctx.fillRect(snakeX, snakeY, width, height);
            count = -2;
        }

    })

}
changeDirection();

food();
