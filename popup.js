document.addEventListener("DOMContentLoaded", function() {

document.getElementById("closeTabsButton").addEventListener("click", function() {
  chrome.tabs.query({ url: "https://*.zoom.us/*" }, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
      chrome.tabs.remove(tabs[i].id);
    }
  });
});

});