let counterElem = document.querySelector('.counter');
let addCount = document.querySelector('.increment');
let lowerCount =document.querySelector('.decrement');
let getTime 

    let count = 0;
    updateDisplay();

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

window.setInterval(getTime, 300000);
function getTime(){
    document.querySelector('.timer').innerHTML = count;
}
  getTime.onclick = 
  stopTime.onclick = clearInterval(getTime);