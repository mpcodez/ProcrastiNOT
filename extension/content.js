function checkBlocked() {
    fetch('https://webhook.site/8cdba313-01b4-4b07-8e64-a00e98921170')

    let url = window.location.href;

    let message = {
        type: 'isBlocked',
        url: url 
    }
    
    chrome.runtime.sendMessage(message, (response) => {
        if (response) {
            document.open();
            document.write('<!DOCTYPE html><html><body><h1>Blocked</h1></body></html>');
            document.close();
        }
    })
}

checkBlocked();