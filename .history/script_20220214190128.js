let display = document.querySelector(".counter-display");
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

    let count = 0;

    updateDisplay();

 addCount.addEventListener("click",()=>{
    count++;
    updateDisplay(); 
});
lowerCount.addEventListener("click",()=>{
    count--;
    updateDisplay();
})
function updateDisplay(){
    display.innerHTML = count;
};
 