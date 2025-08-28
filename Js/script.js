let heartCount = 0;
let totalCopy = 0;

//  Card section functinality ///

document.getElementById("all-card-box").addEventListener("click", (e) => {
  const callBtn = e.target.closest(".call-button");
  if (callBtn) {
    const coinBox = document.getElementById("coinBox").innerText;

    if (Number(coinBox) >= 20) {
      const serviceName =
        callBtn.parentNode.parentNode.children[1].children[0].innerText;
      const serviceNumber =
        callBtn.parentNode.parentNode.children[2].children[0].innerText;

      const time = new Date().toLocaleTimeString();

      const historyBox = document.getElementById("call-history-box");
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="bg-gray-200 px-2 mt-2 rounded-lg w-full flex items-center justify-between ">
              <div class="my-3 w-[67%]">
                <h1 class="text-lg font-semibold">
                  ${serviceName}
                </h1>
                <p class="font-semibold text-[#5c5c5c] text-lg">${serviceNumber}</p>
              </div>
              <div class="date text-base font-medium text-[#5c5c5c]">${time}</div>
            </div>
        
        `;
      historyBox.append(div);

      const currentCoin = Number(coinBox) - 20;
      document.getElementById("coinBox").innerText = currentCoin;

      alert(`Calling ${serviceName} ${serviceNumber}..`);
    } else {
      alert(`Not enough coin for call. Need at least 20 coin.`);
    }
  }
  // copy count and copy code functinality //
  const copyButton = e.target.closest(".copyButton");
  if (copyButton) {
    const codeBox = copyButton.parentNode.parentNode.children[2].children[0].innerText;
    const input = document.createElement("input");
    document.body.append(input);

    input.value = codeBox;

    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("Code Copied");

    totalCopy += 1;
    const count = document.getElementById("copyCounter");
    count.innerText = totalCopy;
  
  }
  // heart count functionality
  const heartButton = e.target.closest(".heartIcon");
  if (heartButton) {
    heartCount += 1;
    const count = document.getElementById("heartIconCount");
    count.innerText = heartCount;
  }
});

//  clear history functionality
document.getElementById("clear-history").addEventListener("click", () => {
  document.getElementById("call-history-box").innerText = "";
});
