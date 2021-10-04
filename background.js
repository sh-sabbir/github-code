chrome.action.onClicked.addListener(function(tab) {
    //console.log(tab);
    var gitCodeUrl = tab.url.replace('github.com', 'github.dev');
    //window.location.href = window.location.href.replace('github.com', 'github.dev');
    // alert('working?');
    
    chrome.tabs.update(tab.id, { url: gitCodeUrl });
});