var loser=false;

window.onload = function(){
    var boundaries = document.querySelectorAll(".boundary"); 
    for(var i=0; i < boundaries.length; i++){
        boundaries[i].onmouseover = gameOver;
    }      
};

function gameOver(){
    loser=true;
    if(!loser){
        document.getElementById('status').innerHTML="You Win! good job";
    }
    else{
        document.getElementById('status').innerHTML="Loser";
        this.setAttribute("class", "boundary youlose");

    }

}

function start(){
    var start = document.getElementById("start").onclick= function (){

    }
}

