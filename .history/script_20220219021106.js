let counterElem = document.querySelector(".counter");
let addCount = document.querySelector(".increment");
let lowerCount = document.querySelector(".decrement");
let getTimer = document.querySelector(".getTime");
let stopTimer = document.querySelector(".stopTime");
let goTimer = document.querySelector(".timer");
let startAdd = document.querySelector(".add");
let addSum = document.querySelector(".sum");
let firstNum = document.querySelector(".firstInput");
let secondNum = document.querySelector(".secondInput");
let getFibonacci = document.querySelector(".fibonacci");
let inputNum = document.querySelector(".inputNumber");
let  addFibonacci = document.querySelector(".inputFibonacci");


updateDisplay();
let count = 0;
function Counter(){
  //let count = 0;
this.up = function(){
  return ++count;
};
this.down = function(){
  return --count;
};

}

let counter = new Counter;
console.log(counter);
addCount.addEventListener("click", () => {
   counter.this.up;
  updateDisplay();
});

lowerCount.addEventListener("click", () => {
  counter.this.down;
  updateDisplay();
})
/*let count = 0;
updateDisplay();

addCount.addEventListener("click", () => {
  count++;
  updateDisplay();
});
lowerCount.addEventListener("click", () => {
  count--;
  updateDisplay();
});*/

function updateDisplay() {
  counterElem.innerHTML = count;
}

startAdd.addEventListener("click", () => {
  let x = firstNum.value;
  let y = secondNum.value;
  addSum.innerHTML = add(x)(y);
  firstNum.value = " ";
  secondNum.value = " ";
});

let sum = 0;
function add(x) {
  return function (y) {
    return Number(x) + Number(y);
  };
}
     
getFibonacci.addEventListener("click", () => {
    let f = inputNum.value;
    addFibonacci.value = findFibonacci(f); 
    inputNum.value = " ";
  });

  let findFibonacci = function(f){
              if(f<=0){
                   return 0;
                 }
              if(f===1){
                   return 1;
                 }
              if(f===2){
                   return 2; 
                }
    return findFibonacci(f-2) + findFibonacci(f-1);
};
   
countTime = 0;
function getTime() {
  countTime++;
  goTimer.innerHTML = countTime;
}
let timer = 0;
getTimer.addEventListener("click", () => {
  timer = setInterval(getTime, 1000);
});

stopTimer.addEventListener("click", () => {
  clearInterval(timer);
  countTime = 0;
  goTimer.innerHTML = 0;
});
