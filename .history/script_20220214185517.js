let display = document.querySelector(".counter-display");
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

 //addCount.onclick = getIncrement();
 //lowerCount.onclick = getDecrement();
    let counter = 0;
 addCount.addEventListener("click",()=>{
    counter++;
});

 