(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            const {type} = message;

            if (message.type == "PROFILE_PICTURES") {
                console.log(type)

                automateProfilePics();


            }
        }
    )

    async function automateProfilePics() {
        let nxtClass = ".x14yjl9h xudhj91 x18nykt9 xww2gxu x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x3nfvp2 xl56j7k x1n2onr6 x1qhmfi1 xsdox4t x1useyqa"
        nxtClass = getQSClassFromString(nxtClass);
        let picClass = ".x6s0dn4 x78zum5 xdt5ytf xl56j7k x1n2onr6";
        picClass=getQSClassFromString(picClass);
        let nxtArrow= document.querySelectorAll(nxtClass)[1];
        //loop
        const browseProfilePictures =  () => {
            console.log('in');

            setTimeout(async () => {

                    let profPic = document.querySelector(picClass).querySelector('img').src;
                   await downloadPic(profPic);
                    nxtArrow = document.querySelectorAll(nxtClass);
                    console.log(nxtArrow);
                    if(!nxtArrow){
                        console.log('nooooo',nxtArrow);
                        return;
                    }

                    nxtArrow[1].click();
                    await browseProfilePictures();
                }
                , 1000
            )
        }

           await browseProfilePictures();
        console.log('done');

    }

    async function downloadPic(url) {
        const response = await fetch(url);
        if (!response.ok) {
            return console.log("FAILED");
        }
        const blob = await response.blob();
        const filename = url.split('/')[5].split('?')[0];
        console.log(filename);
        const link = document.createElement('a');
        link.download = filename;
        link.href = URL.createObjectURL(blob);
        link.click();
    }
})
();


function getQSClassFromString(classes) {
    return classes.replaceAll(' ', '.');

}