// Bookmarklet Created With Bookmarkleter: https://chriszarate.github.io/bookmarkleter/
// Copy the line below and create a bookmark with the url field set to it ⤵
javascript:void function(){if("yes"==prompt("Do You Want to Open All Image Attachments in the Current Window? (yes/no/cancel)").toLowerCase())for(let a of document.getElementsByTagName("img")){let b=a.src.split("/").slice(0,-1).join("/");b.split("instructure.com")[1].startsWith("/courses/")&&window.open(b,"_blank")}}();

/* Original Javascript Code Below
if (prompt("Do You Want to Open All Image Attachments in the Current Window? (yes/no/cancel)").toLowerCase() == "yes") {
    for (let image of document.getElementsByTagName("img")) {
        let link = image.src.split("/").slice(0, -1).join("/") // removes the "preview" suffix, allows image to be displayed instead of being downloaded
        if (link.split("instructure.com")[1].startsWith("/courses/")) { // check if image is specific to the current class
            window.open(link, '_blank')
        }
    }
}

*/