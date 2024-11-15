const canvas = document.getElementById("gameFrame");
const ctx = canvas.getContext("2d");

const snake = {
    x: 100,
    y:100,
    vx:1,
    vy:1,
    width:50,
    height:50,
    color: "red",
    draw(){
        ctx.beginPath();
        ctx.fillStyle  = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.closePath();
        
    }
};

// function draw(){
//     ctx.clearRect(0,0,canvas.width, canvas.height);
//     snake.draw();
//     snake.x += snake.vx;
//     snake.y += snake.vy;
//     raf = window.requestAnimationFrame(draw);
// }

addEventListener("keyup", (event)=>{
    if(event.key == "ArrowLeft"){
        ctx.clearRect(0,0,canvas.width, canvas.height);

        snake.draw();
        snake.x -= snake.vx + 10;
        raf = window.requestAnimationFrame(draw);
        
    }
})

snake.draw();
