// Variables for homepage scroll text
var j = 0;
var homepageScrollTxt = "Welcome to my portfolio! Scroll down to see projects...";
var homepageSpeed = 40; // in milliseconds

// Gives the typing effect for scroll text on homepage
function homepageScrollTextWriter() {
    if (j < homepageScrollTxt.length) {
    document.getElementById("homepageScrollText").innerHTML +=  homepageScrollTxt.charAt(j);
    j++;
    setTimeout(homepageScrollTextWriter, homepageSpeed)
    }
}

// Show typing effect on pages that have it
window.onload = function() {
    homepageScrollTextWriter()
}
