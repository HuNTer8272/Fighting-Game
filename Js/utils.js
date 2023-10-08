const audio = new Audio('music.mp3');
const win = new Audio('win.mpeg');
let hasPlayedWinMusic = false;

function rectangularCollision({rectangle1,rectangle2}){
    return(
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
        rectangle2.position.x && rectangle1.attackBox.position.x<= rectangle2.position.x +enemy.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
  
}


function determineWinner({player,enemy,timerId}){
    audio.pause();
    clearTimeout(timerId);
    document.getElementById("displayText").style.display='flex'
    if(player.health==enemy.health){
        document.getElementById("displayText").innerHTML='draw'
    }else if(player.health>enemy.health){
     document.getElementById("displayText").innerHTML='Player 1 Wins'
     if(!hasPlayedWinMusic){
        win.play();
        hasPlayedWinMusic = true;
     }
    }else if(player.health<enemy.health){
     document.getElementById("displayText").innerHTML='Player 2 Wins'
     if(!hasPlayedWinMusic){
        win.play();
        hasPlayedWinMusic = true;
     }
    } 
}

let timer = 60
let timerId
function decreaseTimer(){
    timerId = setTimeout(decreaseTimer,1000)
  if(timer>0) {
    audio.play();
    timer--
    document.getElementById('timer').innerHTML=timer;
}

  if(timer===0){
    audio.pause();
    determineWinner({player,enemy,timerId})
 }
}