const canvas = document.getElementById('gg');
let ctx = canvas.getContext('2d');

let picBackground = new Image();
    picBackground.src = "./pic/background.jpg";

let picPlayerLeft = new Image();
    picPlayerLeft.src = "./pic/playerLeft.png";
let picPlayerRight = new Image();
    picPlayerRight.src = "./pic/playerRight.png";
let arrPicPlayer = [];
    arrPicPlayer['left']=picPlayerLeft;
    arrPicPlayer['right']=picPlayerRight;

let picEnemyLeft = new Image();
    picEnemyLeft.src = "./pic/enemyLeft.png";
let picEnemyRight = new Image();
    picEnemyRight.src = "./pic/enemyRight.png";
let arrPicEnemy = [];
    arrPicEnemy['left']=picEnemyLeft;
    arrPicEnemy['right']=picEnemyRight;


ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function resizeImg(img, percent){
    let prop;
    if(img.width>img.height){
        prop = img.width/img.height;
        img.height = window.innerHeight*percent/100;
        img.width = img.height*prop;
    }else{
        prop = img.height/img.width;
        img.width = window.innerHeight*percent/100;
        img.height = img.width*prop;
    }
}
 let startGame = false;
 let xPlayer = 280, yPlayer = 730,
     speedPlayer = 5,speedEnemy=50
    navPlayer = 'right', navEnemy='left'
     xEnemy = 1300, yEnemy = 40;

function boardPic(pic, x, y){
    let picRight, picBottom;
    picRight = x + pic.width;
    picBottom = y + pic.height;
    return [picRight, picBottom];        
    }

function draw(){
    let picPlayer = arrPicPlayer[navPlayer];
    let picEnemy = arrPicEnemy[navEnemy];
    resizeImg(picPlayer,8);
    resizeImg(picEnemy,8);
    let boardPicPlayer = boardPic(picPlayer, xPlayer, yPlayer);
    console.log(boardPicPlayer)
    let boardPicEnemy = boardPic(picEnemy, xEnemy, yEnemy);

    function startPosition(){
        xPlayer = window.innerWidth*0.162;
        yPlayer = window.innerHeight*0.93-picPlayer.height;

        xEnemy = window.innerWidth*0.76;
        yEnemy = window.innerHeight*0.12-picEnemy.height;
    }
    
    function moveEnemy(){
        let timerMoveEnemy = setTimeout(()=>{
            if(xEnemy>(xPlayer+picPlayer.width)){
                xEnemy--;
                navEnemy='left';
            }else if((xEnemy+picEnemy.width)<xPlayer){
                xEnemy++
                navEnemy='right';
            }
            draw();
            moveEnemy();
        },speedEnemy); 

    }

    if(startGame){
        startPosition();
        moveEnemy();
        startGame=false;
    }
    
    ctx.drawImage(picBackground, 0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(picPlayer, xPlayer, yPlayer, picPlayer.width,picPlayer.height);
    ctx.drawImage(picEnemy, xEnemy, yEnemy, picEnemy.width,picEnemy.height);
}

picEnemyLeft.onload = picEnemyRight.onload = picPlayerLeft.onload = picPlayerRight.onload = picBackground.onload = draw;

document.addEventListener('keydown',(event)=>{
    let KeyPressed = event.code;
    switch(KeyPressed){
        case 'ArrowLeft':
            xPlayer-=speedPlayer;
            navPlayer = 'left';
         //   soundStep.play();
        break;
        case 'ArrowRight':
            xPlayer+=speedPlayer;
            navPlayer = 'right';
       //     soundStep.play();
        break;
        case 'Enter':
            startGame=true;
       //     soundStep.play();
        break;
    }
    draw();
});