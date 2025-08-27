let heartCount = 0;
document.getElementById("heartIcon")
    .addEventListener("click",()=>{
        heartCount += 1;
       const count = document.getElementById("heartIconCount");
       count.innerText = heartCount; 
    })
let totalCopy = 0;
document.getElementById("copyBtn")
    .addEventListener("click",()=>{
        totalCopy += 1;
       const count = document.getElementById("copyCounter");
       count.innerText = totalCopy; 
    })