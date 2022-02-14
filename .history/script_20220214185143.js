let display = document.querySelector(".counter-display");
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

 addCount.onclick = getIncrement();
 lowerCount.onclick = getDecrement();
    
function getIncrement(click){
    display.innerHTML++ ; 
};
function getDecrement(click){
    display.innerHTML-- ;
}


 