const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;

let xVelocity=0;
let yVelocity=0;

const drawGame = () =>{
    //game loop
    clearScreen();
    changeSnakePostion();
    drawSnake();
    setTimeout(drawGame, 1000/ speed);
}

const clearScreen = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

const changeSnakePostion = () =>{
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

const drawSnake= () =>{
    ctx.fillStyle = "orange"
    ctx.fillRect(headX * tileCount, headY* tileCount, tileSize,tileSize);
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event){
    //up
    if(event.keyCode == 38){
        if(yVelocity == 1)
        return;
        yVelocity = -1;
        xVelocity = 0;
    }
    //down
    if(event.keyCode == 40){
        if(yVelocity == -1)
        return;
        yVelocity = 1;
        xVelocity = 0;
    }

    //left
    if(event.keyCode == 37){
        if(xVelocity == 1)
        return;
        yVelocity = 0;
        xVelocity = -1;
    }

    //right
    if(event.keyCode == 39){
        if(xVelocity == -1)
        return;
        yVelocity = 0;
        xVelocity = 1;
    }
}

drawGame();