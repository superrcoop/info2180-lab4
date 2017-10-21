var loser=false;


window.onload = function(){
    activateborder();

    document.getElementById("start").addEventListener("click", start);  
    document.getElementById("end").addEventListener("mouseleave", endGame);
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
    loser=false;
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = "boundary";
        document.getElementById("status").innerHTML="Retry";
    } 
    activateborder();
}

function activateborder(){
    var boundaries = document.querySelectorAll(".boundary"); 
    for (var i=0; i< boundaries.length-1; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
}

function deactivateborder(){
    var boundaries = document.querySelectorAll(".boundary"); 
    for (var i=0; i< boundaries.length-1; i++){
        boundaries[i].removeEventListener("mouseover", gameOver);
    }
}

function endGame(){
    if(!loser){
       document.getElementById("status").innerHTML="You Win!";
       loser = false;
    }
    deactivateborder();

}
