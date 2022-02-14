 
let addCount = document.getElementById("increment");
let lowerCount =document.getElementById("decrement");

 addCount.onclick = getIncrement;
 lowerCount.onclick = getDecrement;
   let count = 0;
function getIncrement(){
   count = count++; 
};
function getDecrement(){
    count = count--; 
}


 