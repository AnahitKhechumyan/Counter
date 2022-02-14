let displayElem = document.querySelector('.counter-display');
let addCount = document.querySelector('.increment');
let lowerCount =document.querySelector('.decrement');

    let count = 0;

    updateDisplay();

 addCount.addEventListener("click",()=>{
    count++;
    updateDisplay(); 
});
lowerCount.addEventListener("click",()=>{
    count--;
    updateDisplay();
}); 
function updateDisplay(){
    displayElem.innerHTML = count;
};
 