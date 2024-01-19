import {getCurrentTab} from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
    let tab = await getCurrentTab();
    console.log(tab);
    if (tab.url && tab.url.includes("facebook.com")){
        let startButton = document.createElement('button');
        startButton.innerText="START";
        startButton.addEventListener('click',async ()=>{
            await chrome.tabs.sendMessage(tab.id,{
                type:"PROFILE_PICTURES"
            });
        })
        document.body.appendChild(startButton);


    } else {
        let title = document.querySelector(".title").innerText = "This is not a facebook page.";
    }
})