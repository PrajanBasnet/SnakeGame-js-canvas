const canvas = document.getElementById("gameFrame");
const ctx = canvas.getContext("2d");
let speedX = 13;
let speedY = 13;
let snakeX = 0;
let snakeY = 0;
let width = 50;
let height = 50;

let count = 0;

window.onload = function () {
    // setInterval(food,1000/1);

    setInterval(snake, 1000 /3);
    
}


function food() {
    let foodX = Math.floor(Math.random() * 380);
    let foodY = Math.floor(Math.random() * 380);
    ctx.fillRect(foodX, foodY, 30, 30);
}

function snake() {
    ctx.clearRect(snakeX, snakeY, width, height);

    console.log(count);
    switch(count){
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
        if (event.key == "ArrowDown") {
            ctx.clearRect(snakeX, snakeY, width, height);
            snakeY += speedY;
            ctx.fillRect(snakeX, snakeY, width, height);
                count = 1;
        } else if (event.key == "ArrowUp") {
            ctx.clearRect(snakeX, snakeY, width, height);
            snakeY -= speedY;
            ctx.fillRect(snakeX, snakeY, width, height);
            count = -1;

        }
        else if (event.key == "ArrowRight") {
            ctx.clearRect(snakeX, snakeY, width, height);
            snakeX += speedX;
            ctx.fillRect(snakeX, snakeY, width, height);
            count = 2;
        }
        else if (event.key == "ArrowLeft") {
            ctx.clearRect(snakeX, snakeY, width, height);   
            snakeX -= speedX;
            ctx.fillRect(snakeX, snakeY, width, height);
            count = -2;
        }

    })

}
changeDirection();


food();