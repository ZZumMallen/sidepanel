// Script for the expandable sections
const expander = document.getElementById("disc");

if (expander) {
  expander.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable__title-bar");
    const expandable = ev.target.closest(".expandable");
    if (!isExpandableTitle) {
      return;
    }
    expandable.classList.toggle("expandable--open");
  });
}

// button script to trigger bgrd change
const apptbutton = document.getElementById("ag_gis__expander");

if (apptbutton) {
  apptbutton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
      console.log(response.farewell);
    });
  });
}

const agSearch = document.getElementById("ag_search__expander");

if(agSearch){
agSearch.addEventListener("click", () => {
    chrome.runtime.sendMessage({ data: "agSearch" }, function (response) {
        console.log(response.result);
      });
  });
}
