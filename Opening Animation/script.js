document.addEventListener("DOMContentLoaded", function(event) { 
    setInterval(changeImage, 2000); // Change image every 2 seconds
});

function changeImage() {
    var breathImage = document.getElementById("breathImage");
    if (breathImage.src.endsWith("breath in.jpeg")) {
        breathImage.src = "breath out.png";
    } else if (breathImage.src.endsWith("breath out.png")) {
        breathImage.src = "breath in.jpeg";
    }
}