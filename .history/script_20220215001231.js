let counterElem = document.querySelector('.counter');
let addCount = document.querySelector('.increment');
let lowerCount =document.querySelector('.decrement');
let getTimer = document.querySelector('.getTime'); 
let stopTimer = document.querySelector('.stopTime'); 
let goTimer = document.querySelector('.timer')

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
    counterElem.innerHTML = count;
};

 
    countTime=0;
 function getTime(){
    //countTime++;
    goTimer.innerHTML = countTime;
 }
   let timer = 0;
  getTimer.addEventListener("click",()=>{
    timer = setInterval(getTime,1000);
});
 
stopTimer.addEventListener("click",()=>{
    clearInterval(timer);
    count = 0;
    goTimer.innerHTML = 0;
});
     
     

  
 