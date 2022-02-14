let display = document.querySelector(".counter-display");
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

    let count = 0;

    updateDisplay();

 addCount.addEventListener("click",()=>{
    count=+1;
    updateDisplay(); 
});
lowerCount.addEventListener("click",()=>{
    count=-1;
    updateDisplay();
})
function updateDisplay(){
    display.innerHTML = count;
};
 