 
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

 addCount.onclick = getIncrement();
 lowerCount.onclick = getDecrement();
   let count = 0;
function getIncrement(click){
    count.innerHTML++ ; 
};
function getDecrement(click){
    count.innerHTML-- ;
}


 