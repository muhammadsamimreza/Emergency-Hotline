let heartCount = 0;
document.getElementById("heartIcon").addEventListener("click", () => {
  heartCount += 1;
  const count = document.getElementById("heartIconCount");
  count.innerText = heartCount;
});
let totalCopy = 0;
document.getElementById("copyBtn").addEventListener("click", () => {
  totalCopy += 1;
  const count = document.getElementById("copyCounter");
  count.innerText = totalCopy;
});

document.getElementById('all-card-box').addEventListener("click",(e)=>{
    if(e.target.className.includes("call-button")){
        const callBtn = e.target;
        const serviceName = 
        callBtn.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = 
        callBtn.parentNode.parentNode.children[2].children[0].innerText;

        const time = new Date().toLocaleTimeString();
        

        const historyBox = document.getElementById('call-history-box');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-gray-200 px-3 mt-2 rounded-lg w-full flex items-center justify-between ">
              <div class="my-3 w-[70%]">
                <h1 class="text-lg font-semibold">
                  ${serviceName}
                </h1>
                <p class="font-semibold text-[#5c5c5c] text-lg">${serviceNumber}</p>
              </div>
              <div class="date font-medium text-[#5c5c5c]">${time}</div>
            </div>
        
        `;
        historyBox.append(div);
        alert(`Calling ${serviceName} ${serviceNumber}..`);
       
    }
})

document.getElementById("clear-history").addEventListener("click",()=>{
   document.getElementById('call-history-box').innerText = '';
})
