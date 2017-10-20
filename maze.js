window.onload = function(){
    //Exercise 1
    var a = document.getElementById("boundary1");
    a.onmouseover = function()
        {
            this.setAttribute("class","boundary youlose");
            this.style.backgroundColour = "#ff8888";

        }

    //Excercise 2
    var boundaries = document.querySelectorAll(".boundary"); 
    var check = false;
            
    
    
}