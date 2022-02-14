let counterElem = document.querySelector('.counter');
let addCount = document.querySelector('.increment');
let lowerCount =document.querySelector('.decrement');
let getTimer = document.querySelector('.getTime'); 
let stopTimer = document.querySelector('.stopTime'); 
let goTimer = document.querySelector('.timer');
let startAdd = document.querySelector('.add'); 
let addSum = document.querySelector('.sum'); 
let firstNum = document.querySelector('.firstInput');
let secondNum = document.querySelector('.secondInput');


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

  
startAdd.addEventListener("click",()=>{
    let x = firstNum.innerHTML;
    console.log(x);
    let y = secondNum.innerHTML;
   addSum.innerHTML +=  add(x)(y);
   console.log(add(x)(y));
});
 
function add(x){
    return function(y){
     return x + y;   
    }    
};
  
 
    countTime=0;
 function getTime(){
    countTime++;
    goTimer.innerHTML = countTime;
 }
   let timer = 0;
  getTimer.addEventListener("click",()=>{
    timer = setInterval(getTime,1000);
});
 
stopTimer.addEventListener("click",()=>{
    clearInterval(timer);
    countTime = 0;
    goTimer.innerHTML = 0;
});
     
     

  
 