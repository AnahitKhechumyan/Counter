 
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

 addCount.onclick = getIncrement;
 lowerCount.onclick = getDecrement;
   let count = 0;
function getIncrement(){
    count.innerHTML++ ; 
};
function getDecrement(){
    count.innerHTML-- ;
}


 