let counterElem = document.querySelector('.counter');
let addCount = document.querySelector('.increment');
let lowerCount =document.querySelector('.decrement');

    let count = 0;

 addCount.addEventListener("click",()=>{
    count++;
    updateDisplay(); 
});
lowerCount.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

updateDisplay();
function updateDisplay(){
    counterElem.innerHTML = count;
};
 