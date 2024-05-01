/* loads the homepage for the sidepanel */
const startPage = "pages/index.html";

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({ path: startPage });
});

// allows programmatic injection
chrome.runtime.onInstalled.addListener(async () => {
  for (const cs of chrome.runtime.getManifest().content_scripts) {
    for (const tab of await chrome.tabs.query({ url: cs.matches })) {
      if (tab.url.match(/(chrome|chrome-extension):\/\//gi)) {
        continue;
      }
      chrome.scripting.executeScript({
        files: cs.js,
        target: { tabId: tab.id, allFrames: cs.all_frames },
        injectImmediately: cs.run_at === "document_start",
        // world: cs.world, // uncomment if you use it in manifest.json in Chrome 111+
      });
    }
  }
});

// Listening and responding to the background button
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(
  //   sender.tab
  //     ? "from the sidepanel script:" + sender.tab.url
  //     : "from the extension - background"
  // );
  if (request.greeting === "hello") {
    sendResponse({ farewell: "GIS Expander Clicked" });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { blaster: "blast" });
    });
  }
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(
  //   sender.tab
  //     ? "from the sidepanel script:" + sender.tab.url
  //     : "from the extension - wide"
  // );
  if (request.data === "agSearch") {
    sendResponse({ result: "agSearch Clicked" });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { width: "wide" });
    });
  }
});
