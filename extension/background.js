function urlChanged(tabId, changeInfo, tab) {
    const url = changeInfo.url;

    if (url == undefined) {
        return;
    }

    console.log(url);
}

chrome.tabs.onUpdated.addListener(urlChanged);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let messageType = message['type'];
    
    if (messageType == 'isBlocked') {
        let urlObject = new URL(message['url']);
        let domain = urlObject.hostname;

        console.log(domain);

        sendResponse(false);
    }
});