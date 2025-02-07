var score=0;
var hitVal=0;

function runTimer(){
    var timer=60;
    var ans= setInterval(function(){
        if(timer>0){
            timer=timer-1;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            document.querySelector("#hitval").textContent="";
            document.querySelector("#pbtm").innerHTML="<h1>Game Over</h1>";
            clearInterval(ans);
        }
    }, 1000)
}

function getNewHit(){
    hitVal =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitVal;
}

function makeBubble(){
    for(var i=0; i<198; i++){
        var num= Math.floor(Math.random()*10);
        document.querySelector("#pbtm").innerHTML+=`<div class="bubble">${num}</div>`;
    }
}

function increaseScore(){
    score=score+10;
    document.querySelector("#scoreval").textContent= score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    document.querySelector("#pbtm").innerHTML='';
    makeBubble();
    var hit= dets.target.textContent;
    if(hit==hitVal){
        increaseScore();
        getNewHit();
    }
    else{  
    }
});

makeBubble();
getNewHit();
runTimer();