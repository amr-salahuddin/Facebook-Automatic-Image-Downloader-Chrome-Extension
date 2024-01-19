// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
//     if (tab.url && tab.url.includes("facebook.com")){
//         let tmpparams = tab.url.split('?')[1];
//         let urlParams = new URLSearchParams(tmpparams);
//         chrome.runtime.sendMessage(tabId,{
//             type:"DOWNLOAD"
//         })
//     }
//
//
// })