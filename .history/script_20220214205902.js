let counterElem = document.querySelector('.counter');
let addCount = document.querySelector('.increment');
let lowerCount =document.querySelector('.decrement');

    let count = 0;

 addCount.addEventListener("click",()=>{
    count++;
    counterElem.innerHTML = count;
});
lowerCount.addEventListener("click",()=>{
    count--;
    counterElem.innerHTML = count;
});

updateDisplay();
function updateDisplay(){
    counterElem.innerHTML = count;
};
 