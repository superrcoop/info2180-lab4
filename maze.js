var loser=false;


window.onload = function(){
    var boundaries = document.querySelectorAll(".boundary"); 
    for(var i=0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover",gameOver);
    }    

    document.getElementById("start").addEventListener("click", start);  
    document.getElementById("end").addEventListener("mouseover", endGame);
};

function gameOver(){
    loser=true;
    document.getElementById('status').innerHTML="Loser";
    var boundaries = document.querySelectorAll(".boundary"); 
    for (var i = 0; i < boundaries.length-1; i++) {
        boundaries[i].className += " youlose";
    }
}

function start(){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = "boundary";
        document.getElementById("status").innerHTML="Retry";
    } 

}

function endGame(){
    if(!loser){
       document.getElementById("status").innerHTML="You Win!";
       loser = false;
    }

}
