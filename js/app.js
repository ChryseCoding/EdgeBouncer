let canvas = document.getElementById("myCanvas");
let drawBoard = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height-30;

let dx = 2;
let dy = -2;

let ballRadius = 10;

function drawingBall() {
    drawBoard.beginPath();
    drawBoard.arc(x, y, ballRadius, 0, Math.PI*2, true);
    drawBoard.closePath();
    drawBoard.fill();
}

function drawingDetails() {
    drawBoard.clearRect(0, 0, canvas.width, canvas.height);
    drawingBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        drawBoard.fillStyle = RandomColorGenerator();
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        drawBoard.fillStyle = RandomColorGenerator();
    }
    
    x += dx;
    y += dy;
}

function RandomColorGenerator() {
    let colorCode = '0123456789ABCDEF'.split('');
    let shade = '#';
    for (let i = 0; i < 6; i++ ) {
        shade += colorCode[Math.floor(Math.random() * 16)];
    }
    return shade;
}

setInterval(drawingDetails, 10);
