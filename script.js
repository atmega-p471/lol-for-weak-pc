const canvas = document.getElementById("gg");
let ctx = canvas.getContext('2d');

let picbackground = new Image();
    picbackground.src = "./pic/background.jpg";

let picPlayer = new Image();
    picPlayer.src = "./pic/player.png"
let picPlayer2 = new Image();
    picPlayer2.src = "./pic/player2.png"

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function draw(){
    ctx.drawImage(picbackground, 0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(picPlayer, 300, 750, picPlayer.width/10, picPlayer.height/10);
    ctx.drawImage(picPlayer2, 1310, 50, picPlayer2.width/10, picPlayer2.height/10);
}
picbackground.onload = picPlayer.onload = draw;