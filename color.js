var color=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",

] 

var squares=document.querySelectorAll(".square")

var pickedColor=color[3]

var colorDisplay=document.getElementById("colorDisplay")
colorDisplay.textContent=pickedColor
var DisplayMessage=document.querySelector("#message")
for(var i=0; i < squares.length; i++){
    //add initial color to square
    squares[i].style.backgroundColor=color[i]

    //add clickListener to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedcolor=this.style.backgroundColor
        //compare it with picked color
        if(clickedcolor===pickedColor){
         DisplayMessage.textContent="Correct"
        }
        else{
            this.style.backgroundColor='#232323'
            DisplayMessage.textContent="Try Again!"
        }
    })
}