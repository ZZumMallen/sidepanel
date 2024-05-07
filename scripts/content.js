//Listening and responding to the background button
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from the sidepanel script:" + sender.tab.url
      : "from the extension"
  );
  if (request.blaster === "blast") {
    const controlsElement = document.querySelector(".controls");
    controlsElement.classList.toggle("cal--change");
  }
});
	


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from the sidepanel script:" + sender.tab.url
      : "from the extension"
  );
  if (request.width === "wide") {
    const controlsService = document.querySelector("#indexPage > modal-container > div > div > ag-job-site-details-modal > div.flo-modal-body > div > div > div > ag-plant-inv-batch\
    > div > div.col-md-7 > ag-plant-inventory-list > div > kendo-grid > div > div > div > table > colgroup > col:nth-child(2)");
    controlsService.classList.toggle("new--width");
  }
})


