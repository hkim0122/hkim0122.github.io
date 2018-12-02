// Variables for projects pages scroll text
var i = 0;
var scrollTxt = "Scroll Down...";
var scrollSpeed = 100; // in milliseconds

// Gives the typing effect for scroll text on projects pages
function scrollTextWriter() {
    if (i < scrollTxt.length) {
    document.getElementById("scrollText").innerHTML += scrollTxt.charAt(i);
    i++;
    setTimeout(scrollTextWriter, scrollSpeed);
    }
}

// Show typing effect on pages that have it
window.onload = function() {
    scrollTextWriter()
}
