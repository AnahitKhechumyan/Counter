let display = document.querySelector(".counter-display");
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

 //addCount.onclick = getIncrement();
 //lowerCount.onclick = getDecrement();
    let count = 0;
 addCount.addEventListener("click",()=>{
    count++;
    updateDisplay(); 
});
function updateDisplay(){
    display.innerHTML = count;
};
 